const list:number[] = [1, 2, 3]; 
const min = (list: number[]): number => {
  return Math.min(...list)
};

const max = (list: number[]): number => {
   return Math.max(...list)
};

console.log(min(list))
console.log(max(list))

//so each function on its own so one returns the maximum number of and another returns the minumum number
//We use built in function Math.max/min to find that 
