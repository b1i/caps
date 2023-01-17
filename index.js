function caps(str, wordsToUppercase) {
  wordsToUppercase = wordsToUppercase.split(",")
  for (let i = 0; i < wordsToUppercase.length; i++) {
    let word = wordsToUppercase[i].trim()
    let regex = new RegExp("\\b" + word + "\\b", "gi")
    str = str.replace(regex, word.toUpperCase())
  }
  return str
}


