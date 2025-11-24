declare global {
  interface String {
    isUpperCase(): boolean;
  }
}

String.prototype.isUpperCase = function(this: string): boolean {
  return this.split("").every(char => char === char.toUpperCase());
};

export {};