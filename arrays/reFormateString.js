/**
 * 
 Given alphanumeric string s. (Alphanumeric string is a string consisting of 
 lowercase English letters and digits). You have to find a permutation of the 
 string where no letter is followed by another letter and no digit is followed 
 by another digit. That is, no two adjacent characters have the same type.
 Return the reformatted string or return an empty string if it is impossible to 
 reformat the string.
 Input: s = "a0b1c2"
 Output: "0a1b2c"
 */

//  timeComplexity = Big O(n) where n is the length of s
// spaceComplexity = Big O(n) where n is the length of s

var reformat = function (s) {
  let numbers = [];
  let alphabets = [];

  for (let i = 0; i < s.length; i++) {
    s[i] == Number(s[i]) ? numbers.push(s[i]) : alphabets.push(s[i]);
  }

  if (Math.abs(numbers.length - alphabets.length) > 1) {
    return "";
  } else {
    maxLen = Math.max(numbers.length, alphabets.length);
    let output = "";

    for (let i = 0; i < maxLen; i++) {
      let alphabet = alphabets[i] ? alphabets[i] : "";
      let number = numbers[i] ? numbers[i] : "";
      output +=
        numbers.length === maxLen ? number + alphabet : alphabet + number;
    }

    return output;
  }
};
