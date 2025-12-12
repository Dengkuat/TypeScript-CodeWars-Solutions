// Maximum Triplet Sum

// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :

// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples

// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:

// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:

// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:

// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// Playing with Numbers Series

// Playing With Lists/Arrays Series

// For More Enjoyable Katas

// ALL translations are welcomed

// Enjoy Learning !!

// Zizou

//my thought 
//so the maximum array size right 
//aight meaning if we have an aray then we need to get the 3 largest intgers and sum them then tht should be our solution
//tho the numbers can not repeat l mean the ones we are summing thatsfor sure 

//my steps
//so my first step will be shorting that array using sort array method we will sort in descending order 

//then we iterate through each if that initial number we are iterating through is not the same as the next one then we add it to our clean array with non duplications
//so l will slice from index 0 to 2 to get the 3 numebers we want to sum 
//l will use reduce array method to make the array of 3 max intgers into a single value 
//return the solution and that shoud do for use!!!!!

function maxTriSum(nums :number[]) :number {
  const sortedNumber : number[] = nums.sort((a, b) => b-a);
  const nonDuplicates = nums.filter((num, i) => num !== nums[i+1]);
  const maxArray = nonDuplicates.slice(0, 3);
  const sumMax  = maxArray.reduce((sum, num) => sum + num, 0);
  return sumMax
}
console.log(maxTriSum([-5, -1, -9, 0, 2]));

//aight l switched to filter method and only filter the ones that are not the same as the other one instead initially l was looking at using map but filter making more sence;