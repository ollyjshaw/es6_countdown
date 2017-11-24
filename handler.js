const all_words = require("./src/sorted").all_words

let coldStart = true

function remove(array, element) {
  const index = array.indexOf(element)

  if (index !== -1) {
    array.splice(index, 1)
  }
}

function solve(letters) {
  function candidate(word, letters) {
    const wordChars = word.split("")
    const letterChars = letters.split("")

    for(var index=0; index<letterChars.length; index++) {

      remove(wordChars, letterChars[index])
      if (wordChars.length > letterChars.length - index) {
        break
      }
    }

    return wordChars.length === 0
  }

  return all_words.find(x => candidate(x, letters))
}

function handler(event, context, callback) {

  console.log(callback)
  const letters = event.pathParameters.letters.toLowerCase()
  console.log(`extracted letters: ${letters}`)

  if (letters.length > 9) {
    const response = {
      statusCode: 400,
      body: "String too large. 9 letters max"
    }
    callback(null, response)
  } else {

    const bestWord = solve(letters)
    console.log(`best word: ${bestWord}`)

    let response
    if (bestWord === undefined) {
      response = {
        statusCode: 204,
        body: {}
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          word: bestWord,
          length: bestWord.length
        })
      }
    }
    console.log(response)

    if(coldStart) {
      console.log(`Was cold start, time remaining: ${context.getRemainingTimeInMillis()}`)
      coldStart = false
    }
    callback(null, response)
  }

}

module.exports.handler = handler
