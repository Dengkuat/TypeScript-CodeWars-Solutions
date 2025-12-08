
// Complete the function that takes a non-negative integer n 
// as input, and returns a list of all the powers of 2 with the exponent 
// ranging from 0 to n ( inclusive ).

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

export function powersOfTwo(n:number):number[] {
  let newArray:number[] = [];
  for(let i = 0; i <= n; i++){
    newArray.push(i);
  }
   return newArray.map(num => 2**num)
}
console.log(powersOfTwo(2))


//so we are given an integer right 
//its never negotiative
//we shoudl list all the powers of 2 with that exponent ranging from 0 to that number


//so what we doing?
//l will first of use a for loop to get me all the integers from 0 to n which is the max number
//then once l have it all in an array then l can use map to make tranformation of each value in that array
//then return that as final return for the solution