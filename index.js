function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

 
  

  // convert the word to lowercase
  // initialize two pointers, one at the start of the word and one at the end
  // while the left pointer is less than the right pointer:
  //   if the characters at the left and right pointers are not equal, return false
  //   increment the left pointer and decrement the right pointer
  // if we reach the end of the word, return true

  /*The `isPalindrome` function takes a string `word` as input and returns true if the word is a palindrome, and false otherwise. A palindrome is a word that reads the same forwards and backwards.

  To check whether a word is a palindrome, we first convert the word to lowercase so that we can compare its characters without worrying about case. We then initialize two pointers, one at the start of the word and one at the end. We use these pointers to compare the characters at the left and right ends of the word, working our way towards the middle. If at any point the characters at the left and right pointers are not equal, we know that the word is not a palindrome, and we can return false. If we reach the middle of the word and have not encountered any unequal characters, we know that the word is a palindrome, and we can return true.
  
  This algorithm assumes that the input is a string. If the input is not a string, the function will not work correctly. It also assumes that whitespace and punctuation should be ignored when determining whether a word is a palindrome. If whitespace and punctuation should be considered, additional logic would need to be added to handle those cases.*/
  
  


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
