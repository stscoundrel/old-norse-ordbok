const EAST_NORSE_SIGN = '(‡)'
const GENDERS = { 'MASCULINE': '(m)', 'FEMININE': '(f)' }
const TYPES = [
  {
    type: 'Noun',
    markup: '(n)'
  },
  {
    type: 'Verb',
    markup: '(v)'
  },
  {
    type: 'Verb, intransive.',
    markup: '(vi)'
  },
  {
    type: 'Verb, transitive.',
    markup: '(vt)'
  },
  {
    type: 'Plural',
    markup: '(pl)'
  },
  {
    type: 'Past participle',
    markup: '(pp)'
  },
  {
    type: 'Adjective',
    markup: '(adj)'
  },
  {
    type: 'Adverb',
    markup: '(adv)'
  },
  {
    type: 'Conjunction',
    markup: '(conj)'
  },
  {
    type: 'Prononun',
    markup: '(pron)'
  },
  {
    type: 'Number',
    markup: '(num)'
  },
  {
    type: 'Comparative',
    markup: '(comp)'
  }
]

module.exports = {
  EAST_NORSE_SIGN,
  GENDERS,
  TYPES,
}