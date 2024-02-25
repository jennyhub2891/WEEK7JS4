/* 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/

/*Problem - is a word a palindrome? my function will take a string, remove any non-alphanumeric characters, convert everything to lowercase and check if it is the same read forward and backward. 

I created this problem to show JavaScript can manipulate strings to make comparison easier. */

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); //Removes any characters that are not letters or numbers and makes all characters lowercase
    return cleanStr === cleanStr.split('').reverse().join('');
}

//examples
let wordToCheck = "race-)$car";
console.log(isPalindrome(wordToCheck)); //output = true because alphanumberic characters are removed

let wordToCheck1 = "ElePhant";
console.log(isPalindrome(wordToCheck1)); //output = false

let wordToCheck2 = "CIVic";
console.log(isPalindrome(wordToCheck2)); //output = true converted all chacters to lowercase

let wordToCheck3 = "Taco Cat";
console.log(isPalindrome(wordToCheck3)); //output = true because space is removed

let wordToCheck4 = "Taco 4 Cat";
console.log(isPalindrome(wordToCheck4)); //output = false because numbers are not removed
