export function isTriangle(a: number, b: number, c: number): boolean {
  return (
    a > 0 &&
    b > 0 &&
    c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a
  );
}

//so our function takes 3 parameters right a, b, c and we should check if the functino is a isTriangle
//meaning we have to check is the sides given can make up a isTriangle 
//we returning boolean falase or true if at all it is a isTriangle

//edge sides
//so all the sides must be greater than zero right 

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 