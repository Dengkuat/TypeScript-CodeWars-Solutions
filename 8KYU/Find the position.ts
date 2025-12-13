// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// ok since we know that there will only be lower case letter then that even more easy 
// we will use the ASCII table value position so since the first lawer case starts at 97
//then we subtract 96 to get 1 which is position for a right

function position(alphabet:string):string {
  return `Position of alphabet: ${String(alphabet.charCodeAt() - 96)}`
}