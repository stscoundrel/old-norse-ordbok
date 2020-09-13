const { formatWord } = require('./words')

/**
 * Scrape words from online.
 * Only do basic html cleaning.
 */
const scrapeWords = async (page) => {
  const result = await page.evaluate(async () => {
    const words = []

    const stripArtifacts = (element) => element.innerHTML.replace(/<[^>]*>?/gm, '').trim()

    const rows = document.querySelectorAll('tr:not(.tableheader)')

    /**
     * Extract word & definition from dom elements.
     * Strip extra html & spaces.
     */
    rows.forEach((row) => {
      const left = row.querySelector('td:first-of-type')
      const right = row.querySelector('td:last-of-type')

      if (left && right) {
        if (!left.classList.contains('tableheader')) {
          const word = stripArtifacts(left)
          const translation = stripArtifacts(right)

          words.push({
            word,
            definition: translation,
          })
        }
      }
    })

    return words
  })

  return result
}

/**
 * Scrape words & definitions from HTML table.
 */
const getAll = async (page) => {
  const rawWords = await scrapeWords(page)

  const words = rawWords.map((word) => formatWord(word))

  return words
}

module.exports = {
  getAll,
}
