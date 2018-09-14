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
let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account += i;
}
console.log(bank_account);

let bonus = 0;
for(let i = 1; i <= 100; i++){
    bonus += i*2;
}
console.log(bonus);
