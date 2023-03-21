// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Raw Code
// function removeChar(str){
//   str = str.split('')
//   let fl = str.pop()
//   let ll = str.shift()
//   str = str.join('')
//   return str
// };

//Revamped
const removeChar = s => {s = s.split('');let f = s.pop();let l = s.shift();return s = s.join('')}

//CodeWarAnswer
const removeChar = str => str.slice(1,-1)