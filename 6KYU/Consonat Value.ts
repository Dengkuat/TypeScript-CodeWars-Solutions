export function solve(s: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let max = 0;
  let current = 0;
  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (vowels.includes(char)) {
          current = 0;
      } else {
          current += char.charCodeAt(0) - 96;
          if (current > max) {
              max = current;
          }
      }
  }

  return max;
}