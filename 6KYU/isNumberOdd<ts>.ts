export type IsOdd<N extends number> =
  `${N}` extends `${string}${'1' | '3' | '5' | '7' | '9'}` ? true: false;

    // Ts cannot do math operation like $ so we turn the number into a string and just check the last of ends with digit
    //any number that ends with 1,3,5,7,9 are definelty odd so the type becames true otherwise it is all false

    //%2 only works at runtime and this code is being run at compile time ts doesnt support math operation at its level