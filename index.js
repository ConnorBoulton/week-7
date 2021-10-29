// Sum Zero
// O(n)
let numbers = [4, 5, -2, -4]

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            } else {
                return false
            }
        }
    }
}

console.log(sumZero(numbers))


// unique Characters
// O(n)
function uniqueChar(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}



let greeting = 'Hello'
console.log(uniqueChar(greeting))

// longest word
// O(n)
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
// O(n)
function pangram(str){
    str = str.toLowerCase()
    if (str.indexOf('a') == -1|| 
    str.indexOf('b') == -1 ||
    str.indexOf('c') == -1 ||
    str.indexOf('d') == -1 ||
    str.indexOf('e') == -1 ||
    str.indexOf('f') == -1 ||
    str.indexOf('g') == -1 ||
    str.indexOf('h') == -1 ||
    str.indexOf('i') == -1 ||
    str.indexOf('j') == -1 ||
    str.indexOf('k') == -1 ||
    str.indexOf('l') == -1 ||
    str.indexOf('m') == -1 ||
    str.indexOf('n') == -1 ||
    str.indexOf('o') == -1 ||
    str.indexOf('p') == -1 ||
    str.indexOf('q') == -1 ||
    str.indexOf('r') == -1 ||
    str.indexOf('s') == -1 ||
    str.indexOf('t') == -1 ||
    str.indexOf('u') == -1 ||
    str.indexOf('v') == -1 ||
    str.indexOf('w') == -1 ||
    str.indexOf('x') == -1 ||
    str.indexOf('y') == -1 ||
    str.indexOf('z') == -1){
        return false
    }
    
    return true
}

const pangramStr = 'Abc def ghijklmno pqrs tuv wx yz'
console.log(pangram(pangramStr))