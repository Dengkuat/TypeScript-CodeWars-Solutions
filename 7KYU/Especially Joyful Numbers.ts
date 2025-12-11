// Positive integers that are divisible exactly by the sum of their digits are called 
// Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the
//  digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, 
// and returns True if the product of its digit sum and its digit sum reversed equals n; 
// otherwise return False.


const numberJoy = (n:number):boolean => {
  const sumNumber = String(n).split('').reduce((sum, num) => sum+Number(num), 0);
   return n % sumNumber === 0;
 }
 
 //aight for harshab number lets say 18 where 1+8 = 9 so 9 + 9 = 18;
 //right we have number so we suppoed to add all digits of that number
 //so that number if the number is less than nine(9) then we return true meaning it is a harsab number right
 //aight no we have number that are more than 2 digits meaning now we have to add all thoes numbers to each other separately
 //first we turn them to strin, then we split them into an array of intgers then we use reduce to find the sum 
 //so when we get the sum now we can check if the number + number will be giving us that exact number or the number divided by the sum is no zero digit;
 
 // 1. Calculate the sum of the digits of n (sumDigits)
 // 2. If n is not divisible by sumDigits, return false
 // 3. Reverse the digits of sumDigits (reversedSum)
 // 4. If sumDigits * reversedSum equals n, return true; otherwise return false