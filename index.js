function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = Array.from(word)
  console.log(wordArray)
  const backwardsArray = wordArray.reverse()
  console.log(backwardsArray)

  for (let i=0; i<wordArray.length;i++){
    let a = wordArray[i]
    let b = backwardsArray[(wordArray.length-1) - i]
    if(a !== b){
      return false
    }
  }

  return true
}

/* 
  Add your pseudocode here
*/
// Split a string into an array
// Create an inverse array
// Compare each item in the array at the same index
// If any item is not equal, the string is not a palindrome
// Otherwise, return true

/*
  Add written explanation of your solution here
*/

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
