String.prototype.isUpperCase = function() {
  // your code here
  return this.split("").every(char => char === char.toUpperCase())
}
