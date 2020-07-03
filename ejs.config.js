const fs = require('fs')
let lang = {}
console.log('language: ', process.env.LANGUAGE)
const language = process.env.LANGUAGE || 'en'

fs.readdirSync('./pages').forEach(page => {
  let arr = fs.readdirSync(`./pages/${page}`)
  if (arr.indexOf('lang') > -1) {
    let langList = fs.readdirSync(`./pages/${page}/lang`)
    if (langList.indexOf(`${language}.json`) > -1) {
      lang[page] = {}
      lang[page] = require(`./pages/${page}/lang/${language}`)
    }
  }
})

module.exports = {
  locals: {
    lang
  }
}
