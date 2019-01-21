export const encode = (str) => {
  if (str.length === 0) {
    return ''
  }

  // \1 finds matching adjectent chars
  // run is adjacent matching chars e.g. aaa
  // char is the char own its own e.g. a
  return str.replace(/([A-z\s])\1+/g, (run, char) => {
    return run.length + char
  })
}

export const decode = str => {
  if (str.length === 0) {
    return ''
  }

  // \d matchs digits 0-9
  // pair gives the digit and char together, runLength is the digit,
  // char is the char on its own
  return str.replace(/(\d+)([A-z\s])/g, (pair, runLength, char) => {
    // repeats char num of times specified by runLength
    return char.repeat(runLength)
  })
}
