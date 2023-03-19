// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


//Raw code
// function lovefunc(flower1, flower2){
//   if(flower1%2 === 0 && flower2%2 ===1 || flower2%2 === 0 && flower1%2 ===1 ){
//     return true 
//   }else {
//     return false
//   }
// }

//Revamped
const lovefunc = (f1, f2) => ((f1%2===0 &&f2%2===1) || (f2%2===0 &&f1%2===1)) ? true : false

//superVamped
const lovefunc = (f1, f2) => (f1+f2) %2 ===1