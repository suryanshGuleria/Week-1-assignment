/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function stringToArray(str){
     var arrayOfLetters = [];
     for(let i = 0; i<str.length; i++){
     arrayOfLetters[i] = str.charAt(i);
    }
    return arrayOfLetters.sort();
}

function compareArrays(arr1, arr2){
   return arr1.toString() === arr2.toString();
}

function isAnagram(str1, str2) {
     var arrayStr1 = stringToArray(str1);
     var arrayStr2 = stringToArray(str2);
     var answer = compareArrays(arrayStr1, arrayStr2);
     if(answer === true)
     console.log('Yes given string is an anagram');
     else
     console.log('No given string is not an anagram');

}

var name1 = 'suryansh';
var name2 = 'suryansh';
isAnagram(name1, name2); 

module.exports = isAnagram;
