// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot 
// contain anything 
// but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

export class Kata {
  function validatePin(pin: string): boolean {
     if(pin.length !== 4 && pin.length !== 6) return false;
 
     if(!/^[0-9]+$/.test(pin)) return false;
 
     return true  
   }
 }
 
 //we working with an ATM machine right and its either a 6 digit pin or 4
 //again the PIN cannot contain anything but exactly 4 or 6 digits
 //so if we pass an invalid. pin string then the return false else we returning true
 
 //aight first of all l will check if the length is either 4 or 6 before we can check what is acctually inside it
 //then we check if there are only 1-9 numeric values there else we returning fase aswell 