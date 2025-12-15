// Task

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)

// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//aigh so the sequence is clearly the denominator incrementing by 3 every time we move a step forward right
//so we could use the general formula of d_n = 1 + 3(n-1) = 3n - 2 to get the denominatoreach time for the nth value
//every time we mulitply a number by 3 and reduce 2 it should give us the incrementing 3 to make it the next sequence

export function SeriesSum(n: number): string {
  let sum = 0;
  for (let k = 1; k <= n; k++) {
      sum += 1 / (3 * k - 2);
  }
  return sum.toFixed(2);
}