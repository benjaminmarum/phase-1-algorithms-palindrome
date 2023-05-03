function isPalindrome(word) {

  const backWords = reverseString(word);
  const truth = compareStrings(word, backWords);

  function compareStrings(string1, string2) {
    if (string1 === string2) {
      return true;
    } else {
      return false;
    }
  };

  function reverseString(word) {
    const wordArray = word.split("");
    const reversedArray = wordArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
  }
  return truth;
};

/*
  Add your pseudocode here

  Input: word (lowercase string)

  Output: is it a palindrome => does it read the same forwards and backwards?
*/

/*
  Add written explanation of your solution here
  create a function that returns a backwards string of what was entered
  Create a function that compares strings for equivelence
  Call above functions in larger function that returns true if the strings aree equivelent

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("");
  console.log("racecar");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("robot");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  console.log("madam");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");
  console.log("tattarrattat");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("tattarrattat"));

  console.log("");
  console.log("bathtub");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("bathtub"));

  console.log("");
}

module.exports = isPalindrome;
