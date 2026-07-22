// Task 01: Set Up & First Output
console.log("My name is Mwaba Kotati");
alert("Welcome to my page!");

// Task 02: Variables & Types
const name = "Mwaba Kotati";
const university = "Copperbelt University";
let age = 21;
let currentYear = 2026;

console.log(typeof name);
console.log(typeof university);
console.log(typeof age);
console.log(typeof currentYear);

age = 22;
currentYear = 2027;

console.log(age);
console.log(currentYear);

// Task 03: A Simple Calculator
const num1 = 20;
const num2 = 6;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;
const power = num1 ** num2;

console.log(`Sum: ${num1} + ${num2} = ${sum}`);
console.log(`Difference: ${num1} - ${num2} = ${difference}`);
console.log(`Product: ${num1} * ${num2} = ${product}`);
console.log(`Quotient: ${num1} / ${num2} = ${quotient}`);
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`);
console.log(`Power: ${num1} ** ${num2} = ${power}`);

// Task 04: Strings Practice
const firstName = "Mwaba";
const lastName = "Kotati";

// Using + concatenation
const greetingConcat = "Hello, my name is " + firstName + " " + lastName + "!";
console.log(greetingConcat);

// Using a template literal
const greetingTemplate = `Hello, my name is ${firstName} ${lastName}!`;
console.log(greetingTemplate);

console.log(`Length of my name: ${firstName.length}`);
console.log(`My name in uppercase: ${firstName.toUpperCase()}`);

const chosenLetter = "K";
console.log(`Does my name include "${chosenLetter}"? ${firstName.includes(chosenLetter)}`);

// Task 05: Comparisons & Logic
const score = 45;

console.log(score >= 50);
console.log(score === 100);
console.log(score > 40 && score < 60);

// Task 06: Grade Decider
function gradeDecider(score) {
    if (score >= 80) {
        console.log(`Score: ${score} -> Distinction`);
    } else if (score >= 70) {
        console.log(`Score: ${score} -> Merit`);
    } else if (score >= 60) {
        console.log(`Score: ${score} -> Credit`);
    } else if (score >= 50) {
        console.log(`Score: ${score} -> Pass`);
    } else {
        console.log(`Score: ${score} -> Fail`);
    }
}

gradeDecider(85);
gradeDecider(72);
gradeDecider(63);
gradeDecider(30);