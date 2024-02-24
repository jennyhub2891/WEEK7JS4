/* 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/


//my array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//loops through the array summing up the lengths of all the names. 
let totalLetters = 0; //initializes total length to 0
for (let i = 0; i < names.length; i++) { //loop variable i starts at 0 and increments by 1 in each iteration (i++) and this continues until i is greater than the length of the ages array
    totalLetters += names[i].length; // total number of characters is updated inside the loop by adding the value of the current length at the index i
}
let averageLetters = totalLetters / names.length; //calculates the average
console.log(`Average number of letters per name is ${averageLetters}`);

//
let concatenateNames = ''; //initializes the concatenation
for (let i = 0; i < names.length; i++) {
    concatenateNames += names[i] + ' '; //adds a space between the names
}

console.log(`Concatenated names with a space are: ${concatenateNames.trim()}`); //trim removes any trailing spaces in the string.


//3. How do you access the last element of any array?
let lastElement = names[names.length - 1]; //since the array starts with 0 you need to subtract 1 from the length to get the last value
console.log(lastElement); 



//4. How do you access the first element of any array?
let firstElement = names[0] //first element in an array is 0
console.log(firstElement);

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

let nameLenghts = [];

for (let i = 0; i < names.length; i++) {
    nameLenghts.push(names[i].length); //gets the name length
}
console.log(nameLenghts);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = 0;

for (let i = 0; i < nameLenghts.length; i++) {
    sum += nameLenghts[i];
}
console.log(`Total of name lengths ${sum}`);
