// Add two numbers
export function add(a: number, b: number): number {
  return a + b;
}

// Subtract two numbers
export function subtract(a: number, b: number): number {
  return a - b;
}

// Multiply two numbers
export function multiply(a: number, b: number): number {
  return a * b;
}

// Divide two numbers safely
export function divide(a: number, b: number): number | null {
  return b === 0 ? null : a / b;
}