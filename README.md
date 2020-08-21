# Old Norse Orðbók

[Old Norse](https://en.wikipedia.org/wiki/Old_Norse) dictionary for Node.js. Scraped from an online dictonary.

Literal meaning: orð = word, bók = book.

#### Examples
- [Orðbók Knex](https://github.com/stscoundrel/ordbok-knex) - SQL implementation with Knex.js

### Install

`yarn add old-norse-ordbok`

### Usage

Orðbók scrapes the dictionary data using Puppeteer. The dictionary comes in two forms: either Old Norse -> English, or English -> Old Norse. The versions are not identical nor do they contain the same amount of words. This is a feature in the source material.

Old Norse -> English: 4589 words.
English -> Old Norse: 7712 words.

Words are returned in array of:

```javascript
{
    word: String,
    definition: String
}
```

Get dictionary data:

```javascript
const { oldNorseToEnglish, englishToOldNorse } = require('old-norse-ordbok')

const oldNorse = await oldNorseToEnglish()
const english = await englishToOldNorse()

console.log(oldNorse)
console.log(english)

```

### Sources

Scraped from word list compiled by [Vikings of Bjornstad](https://www.vikingsofbjornstad.com/Old_Norse_Dictionary_E2N.shtm). The sources for the compiled list come from:

- A. Richard Diebold Center for Indo-European Language and Culture, Linguistics Research Center, The University of Texas at Austin, Old Norse Online Base Form Dictionary, Jonathan Slocum and Todd B. Krause, http://www.utexas.edu/cola/depts/lrc/eieol/norol-BF.html
- E.V. Gordon, An Introduction to Old Norse, Oxford University Press; 2 edition (July 23, 1981), ISBN 9780198111849
- Jesse L. Byock, Viking Language 1, Jules William Press, © 2013, ISBN 9781480216440
- Ross G. Arthur, English-Old Norse Dictionary, www.yorku.ca/inpar/language/English-Old_Norse.pdf
- Jackson Crawford, YouTube Old Norse lecture series, Instructor of Nordic Studies and Nordic Program Coordinator, University of Colorado, Boulder
- Regia Anglorum: Mik Lawson: miklawson@yahoo.co.uk, http://www.mun.ca/mst/heroicage/issues/8/sayers.html
- The Society for Creative Anachronism: http://www.housebarra.com/EP/ep04/12norsecurse.html
- https://www.vikingeskibsmuseet.dk/en/professions/education/knowledge-of-sailing/the-ships-crew/crewmembers-in-the-viking-age/barber-surgeon
