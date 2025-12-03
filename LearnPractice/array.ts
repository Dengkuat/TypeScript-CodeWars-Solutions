// arrayUtils.ts

// Get a random element from an array
export function  getRandom<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Get unique elements
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Sum numbers in an array
export function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}