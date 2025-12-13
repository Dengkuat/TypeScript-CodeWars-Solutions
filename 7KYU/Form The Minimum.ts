// Task

// Given a list of digits, return the smallest number that could be
//  formed from these digits, using the digits only once
//  (ignore duplicates). Only positive integers in the range of 
// 1 to 9 will be passed to the function.

// Examples

// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

//aight so in this case we only have positive integers and we supposed to 
//form the smallest number from this 
//so easy l will first sort that array then return it in that form 
//that should solve that 

function minvlue(values:number[]) :number{
  const shortArray = values.sort((a, b) => a - b);
  const uniqueArray = [...new Set(shortArray)].join('')
  return Number(uniqueArray)
}
console.log(minvlue([1, 3, 1]))
// console.log(minvlue([1, 9, 3, 1, 7, 4, 6, 6, 7]))