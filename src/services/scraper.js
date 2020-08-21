const puppeteer = require('puppeteer')
const constants = require('../constants/scraper.js')

const { DICTIONARY_URL_EN2ON, DICTIONARY_URL_ON2EN } = constants

/**
 * Bootstrap Puppeteer
 * browser & page instances.
 */
const getBrowser = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  return { browser, page };
}

/**
 * Navigate to ON -> EN dictionary.
 */
const goToNorseDictionary = async (page) => {
  await page.goto(DICTIONARY_URL_ON2EN)
}

/**
 * Navigate to EN -> ON dictionary.
 */
const goToEnglishDictionary = async (page) => {
  await page.goto(DICTIONARY_URL_EN2ON)
}

/**
 * Close puppeteer browser.
 */
const closeBrowser = async (browser) => browser.close()

module.exports = {
  getBrowser,
  closeBrowser,
  goToEnglishDictionary,
  goToNorseDictionary
}
