// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


//my mind?
//first things we check if there is any exmpty array then we will retrn 0
//we will always come accross a missing array size 

//so l will return the length of each array separetly from exactly it array
//then we will sort the array 
//so if that value incremented once is not the next one then that the value we returning
export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  if (!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.some(arr => !arr || arr.length === 0)) {
      return 0;
  }

  const lengths = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);

  const missingArray = lengths.map((x, i) => {
      if (i < lengths.length - 1 && lengths[i + 1] !== x + 1) {
          return x + 1;
      }
      return undefined;
  });

  const firstMissing = missingArray.filter(x => x !== undefined)[0];

  return firstMissing !== undefined ? firstMissing : 0;
}