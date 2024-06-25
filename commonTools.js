function parseSymbols(input) {
  if (!input || !input.replaceAll) return input
  return input.replaceAll(':', '&#58;')
}

function removeDoubleQuotes(input) {
  return input.replaceAll('"', '')
}

module.exports = {
  parseSymbols,
  removeDoubleQuotes,
}
