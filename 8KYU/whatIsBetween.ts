// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


function between(a: number, b: number): number[] {
  let newArry:number[] = [];
  for(let i = a; i <= b; i++){
    newArry.push(i);
  }
  return newArry
}

//input
//so the function takes 2 integers and they are both numbers
//it uses a return type of a number meaning the data type should explicitly be a number
//so then we are to return an array of all integers between the input parameters including the them 


//so l will use a for loop to do this then the min is a and max is b then iterate through them and push them to a new array to be retuned
