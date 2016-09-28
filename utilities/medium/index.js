// https://medium.com/me/settings for more info on keys
import fs from 'fs'
import path from 'path'
import Medium from 'medium-sdk'
import Moment from 'moment'

import CONFIG from '../config.json'

// Get access to Medium account
const client = new Medium.MediumClient({
  clientId: CONFIG.medium.clientId,
  clientSecret: CONFIG.medium.clientSecret,
})
client.setAccessToken(CONFIG.medium.accessToken)



// Gather up the blog posts and ditch any old ones
// But we need to keep track of what "old ones" means somehow, so we'll just persist it in another file
fs.writeFileSync('./blog-date-memory.txt', Moment())
const lastUpdate = Moment(parseInt(fs.readFileSync('./blog-date-memory.txt', 'utf8')))
const paths = fs.readdirSync('../../src/posts')

const posts = paths.map(path => {
  const footer = `<hr>
<footer>
This article was originally posted at <a href="https://www.ratticusscript.firebaseapp.com">my personal website</a>.

It's cross-posted here dynamically using the Medium Node SDK. You can learn more about the code on <a href="https://github.com/joefraley/static-site-generator">github</a>.
</footer>`

  // Grab the HTML for this post and add a Medium specific post-script
  const content = require(`html!markdown!front-matter?onlyBody!../../src/posts/${ path }`)
    .concat(footer)

  // Reformat the meta tags for Medium and add a link back to my site
  const { attributes } = require(`json!front-matter!../../src/posts/${ path }`)
  attributes.canonicalUrl = `https://www.ratticusscript.firebaseapp.com/posts/${ path }`
  attributes.tags = attributes.tags.split(', ')

  return { attributes, content, path: `../../src/posts/${ path }` }
}).filter(post => Moment(lastUpdate).isBefore(post.attributes.date))


// Send all the new posts
client.getUser((error, user) => {
  posts.forEach(post => {
    const { title, canonicalUrl, tags } = post.attributes
    const { content } = post
    client.createPost({
      title,
      content,
      canonicalUrl,
      tags,
      userId: user.id,
      license: Medium.PostLicense.PUBLIC_DOMAIN,
      contentFormat: Medium.PostContentFormat.HTML,
      publishStatus: Medium.PostPublishStatus.PUBLIC
    },
    (error, mediumPost) => {
      if (error) console.error(error)
      saveExternalLink(post.path, mediumPost.url)
    })
  })
})

// We need to update the markdown with a reference to the medium post link after we get it back
function saveExternalLink(postPath, externalLink) {
  const markdown = fs.readFileSync(postPath, 'utf8')
  let newMarkdown

  // Put the external link at the end of our front-matter if it's never been cross-posted
  if (!markdown.includes('externalLink')) {
    const meta = markdown.substring(0, markdown.lastIndexOf('---'))
    const body = markdown.substring(markdown.lastIndexOf('---'))
    const newMeta = meta.concat(`externalLink: ${ externalLink }
  `)
    newMarkdown = newMeta.concat(body)
  }

  // If it's already been cross-posted, just replace the external link with our new one
  else {
    newMarkdown = markdown.replace(/externalLink:\s*.+/, `externalLink: ${ externalLink }`)
  }

  // Go update the file in place
  fs.writeFileSync(postPath, newMarkdown)
}
