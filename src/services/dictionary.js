const {
  EAST_NORSE_SIGN, GENDERS, TYPES, MARKUP,
} = require('../constants/dictionary')

/**
 * Original source has word type, gender etc
 * Hidden in name & desc.
 * Separate them into own fields.
 */
const formatWord = (word) => {
  const branch = getWordBranch(word.word)
  const gender = getWordGender(word.definition)
  const type = getWordType(word.definition)

  return {
    word: cleanMarkup(word.word),
    definition: cleanMarkup(word.definition),
    type,
    gender,
    branch,
  }
}

/**
 * Old West / Old East Norse separation.
 * East Norse is marked with (‡) sign.
 */
const getWordBranch = (word) => {
  if (word.includes(EAST_NORSE_SIGN)) {
    return 'Old East Norse'
  }

  return 'Old West Norse'
}

/**
 * Get word gender from description.
 * Note: original source only has masc. & fem,
 * not neuter gender.
 */
const getWordGender = (word) => {
  if (word.includes(GENDERS.MASCULINE)) {
    return 'Masculine'
  }

  if (word.includes(GENDERS.FEMININE)) {
    return 'feminine'
  }

  return ''
}

/**
 * Get word type from description.
 */
const getWordType = (word) => {
  let wordType = ''

  TYPES.forEach((type) => {
    if (word.includes(type.markup)) {
      wordType = type.type
    }
  })

  return wordType
}

/**
 * Clean additional type markup after extraction.
 */
const cleanMarkup = (content) => {
  let cleanContent = content

  MARKUP.forEach((sign) => {
    cleanContent = cleanContent.replace(sign, '')
  })

  return cleanContent.trim()
}

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
