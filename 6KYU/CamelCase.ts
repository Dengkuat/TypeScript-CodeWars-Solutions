function camelCase(str: string): string {
  const result:string[] = str.split(' ').map((char) => {
    return char.slice(0, 1).toUpperCase()+char.slice(1);
  })
return result.join('');
}
console.log(camelCase('camel case word'))


// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"