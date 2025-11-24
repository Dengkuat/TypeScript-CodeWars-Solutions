// stringUtils.ts

// Reverse a string
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Check if string is a palindrome
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Capitalize the first letter
export function capitalize(str: string): string {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}