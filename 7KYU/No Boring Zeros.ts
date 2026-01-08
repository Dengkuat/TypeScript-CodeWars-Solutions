function noBoringZeros(n: number): number {
  let str = String(n)
  while(str.endsWith('0')){
      str = str.slice(0, -1)
  }

return Number(str);
}

//numbers ending with zero are boring 
//so they telling us to make them fun by getting red of thoes zeros at then end 
//ends with only the ones inbetween any or before any other number other than zero are to be left alone
//so if no zeros we return the number as it is it is not boring 

//alright we will turn all that into a string so that we can use the endsWith method 
//so if a number ends with 0 then we replace with '' nothing
//globaly 

//apparently that wont work so we will do something else
//we will use a lop so aslong as the string or that number ends with 0 then will will keep slicing from 0 to that second last to that number
