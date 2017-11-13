const all_words = [
  'zulu',
  'accompany'
]

function remove(array, element) {
  const index = array.indexOf(element)

  if (index !== -1) {
    array.splice(index, 1)
  }
}

function solve(letters) {
  function candidate(word, letters) {
    const wordChars = word.split('')
    const letterChars = letters.split('')

    letterChars.forEach(function(value){
      remove(wordChars, value)
    })

    return wordChars.length === 0

  }

  return all_words.find(x => candidate(x, letters))
}

function handler(event, context, callback) {

  console.log(callback)

  const responseBody = solve(event.pathParameters.letters)

  const response = {
    statusCode: 200,
    body: responseBody
  }

  callback(null, response)
}

module.exports.handler = handler