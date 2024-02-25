/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/


//my array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//This takes the length and subtracts 1 because the array starts with 0 and subtracts the value in the 0 spot which is first in the array.
let result = ages[ages.length - 1] - ages[0];

console.log(`Last number minus first number is ${result}`); //output = 90


//Add a new age to the array.
let newAge = 48;
ages.push(newAge);

console.log(ages); //shows 48 at the end of the array.

let results = ages[ages.length - 1] - ages[0];

console.log(`Last number minus first number is ${results}`); //results should be 45

//loop to calculate average age
let totalAge = 0;  //initializes total age to 0
for (let i =0; i < ages.length; i++) { //loop variable i starts at 0 and increments by 1 in each iteration (i++) and this continues until i is greater than the length of the ages array
    totalAge += ages[i]; // total age is updated inside the loop by adding the value of the current age at the inded i
}
let averageAge = totalAge / ages.length; //after the loop we calculate the average age
console.log(`Average age is: ${averageAge}`);