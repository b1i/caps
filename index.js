function caps(string, words) {
  const list = words.split(",")
  for (let i = 0; i < list.length; i++) {
    string = string.replaceAll(list[i], list[i].toUpperCase())
  }

  return string
}
module.exports = caps
