//the message must be containting space separated words 
//you need to encrypt each word in the message using the rule where
//1.the first letter must be converted to its ascii code 
//2.the second letter must be switched with the last letter 
//we keeping this simple, there are no special characters in the inputs

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//what we doing for every 

function encryptThis(text: string): string {
  const words: string[] = text.split(' ');

  const encryptedWords: string[] = words.map((word: string): string => {
      if (word.length === 0) return "";

      let arr: string[] = word.split('');

      if (arr.length > 2) {
          let temp: string = arr[1];
          arr[1] = arr[arr.length - 1];
          arr[arr.length - 1] = temp;
      }
      const firstCharCode: number = arr[0].charCodeAt(0);
      arr[0] = firstCharCode.toString();

      return arr.join('');
  });

  return encryptedWords.join(' ');
}