import Path from 'path'
import FS from 'fs'
import Moment from 'moment'
import Firebase from 'firebase'

import CONFIG from '../config.json'


const assets = {
  NOTES_DIRECTORY: '../../src/notes',
  TWITTER_URL: 'https://twitter.com/joseph_fraley/status'
}



/* API console: https://console.firebase.google.com/project/tweeter-80d2b/database/data
*/
const app = Firebase.initializeApp(CONFIG.firebase)


function updateNotesDirectory() {
  Firebase.database().ref()
  .limitToLast(25) // Doubt I'll be tweeting 25 times between runs...
  .once('value')
  .then(function handleFirebaseResponse(snapshot) {
    // Keep track of the last time we ran an update so we don't retread any notes
    const lastUpdate = Moment(parseInt(FS.readFileSync('./tweet-date-memory.txt', 'utf8')))

    snapshot.forEach(child => {
      // Convert the Twitter stored time into a valid Moment
      const tweetTime = Moment(child.val().created_at, 'ddd MMM DD HH:mm:ss Z YYYY')

      // Only write notes that we haven't published locally since the last run
      if (tweetTime.isAfter(lastUpdate)) {
        console.log(tweetTime.format('LLLL'), 'is after', lastUpdate.format('LLLL'))
        storeNoteLocally(child.val())
      }
      // Otherwise bail
      else {
        console.error(tweetTime.format('LLLL'), 'is NOT after', lastUpdate.format('LLLL'))
        return false
      }
    })

    // Update memory to weed out old tweets next time
    FS.writeFileSync('./tweet-date-memory.txt', Moment())

    // The ref().once() method keeps an observer open, so we have to close the process manually
    process.exit()
  })
}


function storeNoteLocally(tweet) {
  // Name files by their unique twitter ID's to simplify routing
  const path = `${ assets.NOTES_DIRECTORY }/${ tweet.id }.json`

  // Add an explicity link to Twitter for convenience
  const note = Object.assign({}, tweet, { externalURL: `${ assets.TWITTER_URL }/${ tweet.id_str }` })

  FS.writeFileSync(path, JSON.stringify(note, null, '\t'))
}


updateNotesDirectory()
