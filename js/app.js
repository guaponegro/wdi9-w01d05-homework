// I. Variables & Datatypes

// A. Q + A
// i. We assign a value to a variable by using 1 = sign
// ex. let x = 5;

// ii. We change the value of that variable by setting the
// variable equal to something else. Ex. let x = 5; to reassign it
// you could say x = "car";

// iii. Say we have 2 seperate variables, let x = 5; and let y = 10;
// If we change the value of x from 5 to 10, we can then write let x = y
// because they both have the same value

// iv. Declaring something registers a variable in its scope.
// Assigning something giving a variable a specific value 
// Defining something gives a variable its parameters

// v. Pseudocode is writing out what you want to do in plain text
// before you actually write the code. You should do it because
// it gives you direction so that you do not write a bunch of useless code

// vi. You should be spending 75-80% of your time thinking about how to solve
// the problem and 25-20% of your time typing the actual code

// B. Strings
// 1.
// let firstVariable = "Hello World";
// firstVariable = 5;
// let secondVariable = firstVariable;
// secondVariable = "Hulk Smash";
// console.log(firstVariable);

// // 2.
// let yourName = "Steven";
// console.log(`Hello, my name is ${yourName}`);

// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true != false);
//   console.log(false == false == false == false == false == false == true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a < b < c);
//   console.log(a + a < d);
//   console.log(48 == '48');

// D. The farm
// const animal = "cow";
// if(animal === "cow"){
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow!");
// }

// E. Driver's Ed
// const age = 27;
// if(age >= 16){
//     console.log("Here are the keys");
// } else {
//     console.log("Sorry, you're too young");
// }

// II. Loops

// A. The basics
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i <= 400; i++){
//     console.log(i);
// }

// for(let i = 12; i < 4000; i++){
//     console.log(i);
//     i+=2;
// }

// B. Get even
// for(let i = 1; i < 100; i++){
//     if(i % 2 === 0){
//         console.log(i + ` <-- is an even number`);
//     }
// }

// C. Give me Five
// for(let i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log(`I found a ${i}. High five!`);
//     } if(i % 3 === 0){
//         console.log(`I found a ${i}. Three is a crowd`);
//     }
// }

// D. Savings Account
// let bank_account = 0;
// for(let i = 1; i <= 10; i++){
//     bank_account += i;
// }
// console.log(bank_account);

// let bonus = 0;
// for(let i = 1; i <= 100; i++){
//     bonus += i*2;
// }
// console.log(bonus);


// E. Multiples of 3 and 5
// Already completed it

// III. Arrays & Control flow

// A. Talk about it:
// 1. The things in an array are called elements
// 2. No, arrays do not guarantee things will be in order
// 3. Anything that you turn into a list can be an array

// B. Easy Does It
// const quotes = ["Hulk Smash", "It's Morphin' Time", "Suit up!"];

// C. Accessing elements
// const randomThings = [1, 10, "Hello", true];

// console.log(randomThings[0]);
// randomThings[2] = "World";
// console.log(randomThings[2]);

// D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// console.log(ourClass[2]);
// ourClass[4] = "Octocat";
// ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// const myArray = [5, 10, 500, 20];

// myArray.push("Egon", "Robert");
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();
// // The only mutation is that I reversed the array
// console.log(myArray);

// F. Biggie Smalls
// const num = 23;
// if(num < 100){
//     console.log("little number");
// } else if(num >= 100){
//     console.log("big number");
// }

// G. Monkey in Middle
// const num = 3;
// if(num < 5){
//     console.log("little number");
// } else if(num > 10){
//     console.log("big number");
// } else{
//     console.log("monkey");
// }

// H. What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//   kristynsCloset.splice(6, 0, "raybans");
//   kristynsCloset[5] = "stained knit hat";
  
//   console.log(thomsCloset[0][0]);
//   console.log(thomsCloset[1][1]);
//   console.log(thomsCloset[2][0]);
//   console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`);
//   thomsCloset[1][2] = "Footie Pajamas";
//   console.log(thomsCloset[1]);

// IV. Functions

// A. printGreeting
// I already did this one

// B. printCool
// const printCool = (name) => {
//     if(name.length >= 5){
//         return `${name} is cool`;
//     }
// };
// console.log(printCool("Django"));

// C. calculateCube
// const calculateCube = (num) => {
//     return (num * num * num);
// }
// console.log(calculateCube(6));

// D. isVowel
//  const isVowel = (character) => {
//     character = character.toLowerCase();
//     if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowel("Z"));

// E. getTwoLengths
// let lengthOne = 0;
// let lengthTwo = 0;
// const getTwoLengths = (str1, str2) => {
//     for(i = 0; i < str1.length; i++){
//        lengthOne += 1;
//     } for(i = 0; i < str2.length; i++){
//         lengthTwo += 1;
//     }
//     return [lengthOne, lengthTwo];
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

// const getMultipleLengths = (arr) => {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++ ){
//         newArr.push(arr[i].length);
//       }
//       return newArr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

// const maxOfThree = (num1, num2, num3) => {
//     return Math.max(num1, num2, num3);
//      if (num1 === num2 || num1 === num3) {
//         return num1;
//     } else if (num2 === num3) {
//           return num2;
//         }
// }

// console.log(maxOfThree(6, 9, 1));

// H. printLongestWord

const printLongestWord = (arr) => {
    let longestWord = "";
    for(i = 0; i < arr.length; i++){
        if(arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));





