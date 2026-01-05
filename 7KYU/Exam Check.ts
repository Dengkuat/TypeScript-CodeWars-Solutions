// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

// function checkExam(array1: string[], array2: string[]): number {
 // good luck
//  let sum = 0;
// for(let i=0; i<array1.length; i++){
    
//     if(array1[i] === '' || array2[i] === '') continue

//     array1[i] === array2[i]? sum+=4:sum--;
   
// } 
//  return sum;
// }
//o l will create an 0 incremmenter right if array1 === array2 result+=4 else result--
//so we will do it for everything
//and then l believe that we are good if the length will always be 4

//but for that case why not just create a loop right so we compare the first array at i and with its index aswell but with the second array




export function checkExam(array1: string[], array2: string[]): number {
  let sum = 0;

  for (let i = 0; i < array1.length; i++) {
      if (array2[i] === '') continue
      sum += array2[i] === array1[i] ? 4 : -1;      
  }

  return sum < 0 ? 0 : sum;          
}