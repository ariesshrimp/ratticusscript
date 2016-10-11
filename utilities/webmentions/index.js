import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'

const paths = fs.readdirSync(path.resolve('../../src/posts'))

const fetchWebMentions = postName => {
  const target = `https://ratticusscript.firebaseapp.com/posts/${ postName }`
  return fetch(`http://webmention.io/api/mentions?target=${ target }`)
    .then(response => response.json())
    .then(json => {
      return json
    })
}

const saveWebMentions = () => {
  paths.forEach(post => {
    const name = post.split('.')[0]
    fetchWebMentions(name)
      .then(results => {
        const data = JSON.stringify(results, null, '\t')
        fs.writeFileSync(`posts/${ name }.json`, data)
      })
  })
}

saveWebMentions()
