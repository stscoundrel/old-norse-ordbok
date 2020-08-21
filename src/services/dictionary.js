/**
 * Scrape words & definitions from HTML table.
 */
const getAll = async (page) => {

  const result = await page.evaluate(async () => {
    const words = []

    const rows = document.querySelectorAll('tr:not(.tableheader)')

    rows.forEach(row => {
      const left = row.querySelector('td:first-of-type')
      const right = row.querySelector('td:last-of-type')

      if( left && right ) {
        const word = left.innerHTML
        const translation = right.innerHTML

        words.push({[word]: translation})
      }
    })

    return words
  })

  return result
}

module.exports = {
  getAll
}