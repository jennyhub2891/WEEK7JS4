/* 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function concatenateWord(word, n) {
    return word.repeat(n); // repeat method is used to concatenate 'word' to itself n times
}

//example
let result = concatenateWord('hiddy', 7); //here we pass in what we want the 'word' to be and how many times we want it to be. 
console.log(result);


/* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/

function name(firstName, lastName) {
    return `${firstName} ${lastName}`; //combines first name and last name with a space between
}
//example
let fullName = name('Spider', 'Man');
console.log(fullName);


/*9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

function sumGreaterThan100(numbers) { //function takes numbers 
    let sum = numbers.reduce((acc, current) => acc + current, 0); //reduce method calculates the sum of numbers in the array
    return sum > 100; //boolean that returns true or false
}

//example
let numbersArray = [28, 5, 17, 30, 18];
let sum = sumGreaterThan100(numbersArray);
console.log(sum); // output false


/* 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

function averageOfNumbers(numbers) { //function takes numbers 
   
    let total = numbers.reduce((acc, current) => acc + current, 0); //reduce method calculates the sum of numbers in the array
    
    let average = total / numbers.length;
    
    return average; 
}

//example
let numbersArrays = [28, 5, 17, 30, 18];
let results = averageOfNumbers(numbersArrays);
console.log(results); // output 19.6


 /* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

 function isAverageGreaterThan(arr1, arr2) {
    let average1 = calculateAverage(arr1);
    let average2 = calculateAverage(arr2);
    return average1 > average2;
 }

 function calculateAverage(numbers) {
    let summation = numbers.reduce((acc, current) => acc + current, 0);
    let averagez = sum / numbers.length;
    return averagez;
 }

 //example
 let array1 = [12, 22, 50, 72, 6, 30];
 let array2 = [100, 18, 4, 36, 22];
 let resultz = isAverageGreaterThan(array1, array1);
 console.log(resultz); //output = false


 /*12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

 function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;  //check if isHotOutside and moneyInPocket is greater than 10.50
 }

 //example
 let hotDay = true;
 let moneyIHave = 22.22;

 let outcome = willBuyDrink(hotDay, moneyIHave);
 console.log(outcome); //output = true

