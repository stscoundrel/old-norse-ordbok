const scraper = require('./services/scraper.js')
const dictionary = require('./services/dictionary.js')

const englishToOldNorse = async () => {
  const { browser, page } = await scraper.getBrowser()

  await scraper.goToEnglishDictionary(page)

  const words = await dictionary.getAll(page)

  await scraper.closeBrowser(browser)

  return words
}

const oldNorseToEnglish = async () => {
  const { browser, page } = await scraper.getBrowser()

  await scraper.goToNorseDictionary(page)

  const words = await dictionary.getAll(page)

  await scraper.closeBrowser(browser)

  return words
}


module.exports = {
  englishToOldNorse,
  oldNorseToEnglish
}
