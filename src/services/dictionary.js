/**
 * Scrape words & definitions from HTML table.
 */
const getAll = async (page) => {

  const result = await page.evaluate(async () => {
    const words = []

    const stripArtifacts = (element) => {
      return element.innerHTML.replace(/<[^>]*>?/gm, '').trim()
    }    

    const rows = document.querySelectorAll('tr:not(.tableheader)')

    /**
     * Extract word & definition from dom elements.
     * Strip extra html & spaces.
     */
    rows.forEach(row => {
      const left = row.querySelector('td:first-of-type')
      const right = row.querySelector('td:last-of-type')

      if( left && right ) {
        if( ! left.classList.contains('tableheader') ) {
          const word = stripArtifacts(left)
          const translation = stripArtifacts(right)

          words.push({
            word: word,
            definition: translation
          })
        }
      }
    })    

    return words
  })

  return result
}

module.exports = {
  getAll
}