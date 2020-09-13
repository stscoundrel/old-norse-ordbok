const {
  EAST_NORSE_SIGN, GENDERS, TYPES, MARKUP,
} = require('../constants/dictionary')

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

module.exports = {
  formatWord,
}
