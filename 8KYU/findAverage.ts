function findAverage(nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
}

