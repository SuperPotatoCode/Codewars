// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

//RAW
// function squareSum(numbers){
//  return numbers.reduce((x,y) => x + y**2, 0)
// }

//REVAMPED
const squareSum = n => n.reduce((x,y)=>x+y**2,0)