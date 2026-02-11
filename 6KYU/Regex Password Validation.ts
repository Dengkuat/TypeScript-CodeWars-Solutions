// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
//
//test cases
// it("sample tests", () => {  
// 		doTest('fjd3IR9', true);
// 		doTest('ghdfj32', false);
// 		doTest('DSJKHD23', false);
// 		doTest('dsF43', false);
// 		doTest('4fdg5Fj3', true);  
// 		doTest('DHSJdhjsU', false);
// 		doTest('fjd3IR9.;', false);
// 		doTest('fjd3  IR9', false);
// 		doTest('djI38D55', true);
// 		doTest('djI3_8D55', false);
// 		doTest('djI38D55@@', false);
// 	});
// });


//aight so we want to confirm if the password is valid or not
//we take in a password type string and return a boolean expression of either true or false 
//it should have alteast 6 characters so password.length > 6
//it should have an upper and lower case letter within else its not valud
//it should contain a digit, an integer
//the character can only be of the 26 characters nothing else like the hiphen, dash, @ $ none of that

//solution 1
export function passwordGenerator(password: string): boolean {
  if (password.length < 6) return false;
  if (!/^[A-Za-z0-9]+$/.test(password)) return false;   
  if (!/[a-z]/.test(password)) return false;           
  if (!/[A-Z]/.test(password)) return false;           
  if (!/[0-9]/.test(password)) return false;       
  return true;
}

//solution 2
export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;

export function passwordGenerator(password: string): boolean {
  return REGEXP.test(password);
}

