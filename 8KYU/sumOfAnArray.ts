// Sum numbers in an array
export function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}