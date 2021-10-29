// Sum Zero
// Work in progress
let numbers = [2, 4, 5, -2]

const sumZero = numbers.reduce((prev, next) => {
    sum = 0
    if(prev + next === sum){
        return true
    }
    else {
        return false
    }
})

console.log(sumZero)


// unique Characters
// Work in progress
function uniqueChars(str){
    str = str.toLowerCase().replace(/([^a-z])+/g, '')
    let letters = []
    for (let i = 0; i < str.length; i++){
        if(letters.hasOwnProperty(str[i])) {
            letters[str[i]]++
        } else {
            letters[str[i]] = 0
        }
    }
}

let greeting = 'Hello'
console.log(uniqueChars(greeting))

// longest word
// O(n^2)
function longWords(arr){
    let word = ''
    for(let i = 0; i < arr.length; i++){
        if (word.length < arr[i].length) {
            word = arr[i]
        }
    }
    return word.length
}

let words = ['Hello', 'Goodbye', 'Github']
console.log(longWords(words))

// Pangram Sentence
// Work in progress
function pangram(sentence){
    sentence.toLowerCase()
    const regex = /[a-z]/g;
    if(sentence.match(regex)){
        return true
    } else {
        return false
    }
}

const pangramStr = 'Abc def ghijklmno pqrs tuv wx yz'
console.log(pangram(pangramStr))