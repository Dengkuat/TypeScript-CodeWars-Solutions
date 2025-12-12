// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

//ok so if the number is even then we make it into a binary form 
//when it is odd then we make it into its hexadecimal form 
//numbers will always be positive so lets say they are greater then 0  all 
//the hexadecimal string should be lowercased

// test case
// assert.strictEqual(evensAndOdds(0),'0')
//     assert.strictEqual(evensAndOdds(13),'d')
//     assert.strictEqual(evensAndOdds(47),'2f')
//     assert.strictEqual(evensAndOdds(12800),'11001000000000')
//     assert.strictEqual(evensAndOdds(8172381723),'1e71ca61b')

//aight we shall have a comparision right to help me check if the number is even or odd ok
//then when l have that number as an odd l will convert it into base 16 and if l have an even number then l will make it into base 2

const evensAndOdds =  (n:number) :string => n % 2 === 0? n.toString(2):n.toString(16);