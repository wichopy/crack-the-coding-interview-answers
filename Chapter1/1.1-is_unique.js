const assert = require('assert')

function isUnique(s) {
  if (s.length > 26) return false
  return withSet(s)
  // return withArray(s)
}

function withArray(s) {
  const charSetBool = []

  for (let i = 0; i < s.length; i++) {
    charSetBool[s.charCodeAt(i)] = false
  }

  for (let i = 0; i < s.length; i++) {
    if (charSetBool[s.charCodeAt(i)] === true) {
      return false
    } else {
      charSetBool[s.charCodeAt(i)] = true
    }
  }

  return true
}

function withSet(s) {
  let letterSet = new Set()

  for (let i = 0; i < s.length; i++) {
    if (letterSet.has(s.charAt(i))) {
      return false
    } else {
      letterSet.add(s.charAt(i))
    }
  }

  return true
}

assert.equal(isUnique('ABC'), true)
assert.equal(isUnique('ABCDEFGHIJS'), true)
assert.equal(isUnique('ABBC'), false)