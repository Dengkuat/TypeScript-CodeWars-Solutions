// Find the number with the most digits.

// If two numbers in the argument array have the 
// same number of digits, return the first one in the array.
export class Kata {
  static findLongest(array: number[]): number {
    let longest = array[0];
    let maxDigits = String(longest).length;

    for (let i = 1; i < array.length; i++) {
      const currentDigits = String(array[i]).length;

      if (currentDigits > maxDigits) {
        longest = array[i];
        maxDigits = currentDigits;
      }
    }

    return longest;
  }
}