// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag(str) {
const hash ="#";
let upperString = str.toLowerCase().split(" ")
let result = hash + upperString.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
return result.length > 140 || result === "#" || result.length <= 0  ? false : result
  
}
module.exports = generateHashtag
