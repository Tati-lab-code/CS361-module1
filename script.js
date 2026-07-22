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

// Week 8 - Task 01: Loop Patterns

// Print 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print only even numbers 1-10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Countdown from 5 to 1, then "Lift off!"
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Lift off!");

// Week 8 - Task 02: Reusable Functions

function addTax(price) {
    return price + price * 0.16;
}

function classify(score) {
    if (score >= 80) {
        return "Distinction";
    } else if (score >= 70) {
        return "Merit";
    } else if (score >= 60) {
        return "Credit";
    } else if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function greet(name) {
    return `Hello, ${name}! Welcome.`;
}

console.log(addTax(100));
console.log(addTax(250));

console.log(classify(85));
console.log(classify(55));
console.log(classify(30));

console.log(greet("Mwaba"));
console.log(greet("Alex"));

// Week 8 - Task 03: Arrow Function Versions

const addTaxArrow = (price) => price + price * 0.16;

const classifyArrow = (score) => {
    if (score >= 80) {
        return "Distinction";
    } else if (score >= 70) {
        return "Merit";
    } else if (score >= 60) {
        return "Credit";
    } else if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
};

const greetArrow = (name) => `Hello, ${name}! Welcome.`;

// Confirm identical results to Task 02
console.log(addTax(100) === addTaxArrow(100));
console.log(classify(85) === classifyArrow(85));
console.log(greet("Mwaba") === greetArrow("Mwaba"));

// Week 8 - Task 04: A Student Object

const student = {
    name: "Mwaba Kotati",
    age: 22,
    year: 3,
    scores: [78, 82, 65, 90, 55],
    getAverage() {
        return this.scores.reduce((total, score) => total + score, 0) / this.scores.length;
    }
};

console.log(student.getAverage());

// Week 8 - Task 05: Array of Students

const students = [
    { name: "Mwaba Kotati", age: 22, year: 3, scores: [78, 82, 65, 90, 55] },
    { name: "Alex Katongo", age: 21, year: 2, scores: [65, 70, 68, 60, 72] },
    { name: "Maria Lombe", age: 23, year: 4, scores: [88, 90, 85, 95, 80] },
    { name: "John Kalenga", age: 20, year: 2, scores: [40, 45, 38, 50, 42] },
    { name: "Sara Kampimpa", age: 22, year: 3, scores: [60, 62, 58, 65, 61] }
];

// Print each name using for...of
for (const s of students) {
    console.log(s.name);
}

// Filter students with an average >= 50
function getAverage(scores) {
    return scores.reduce((total, score) => total + score, 0) / scores.length;
}

const passingStudents = students.filter((s) => getAverage(s.scores) >= 50);
console.log(passingStudents);

// Map to get just their names
const studentNames = students.map((s) => s.name);
console.log(studentNames);

// Week 8 - Task 06: Put It Together

const studentsWithEdgeCase = [
    ...students,
    { name: "Noah Ali", age: 21, year: 2, scores: [] }
];

function getAverageSafe(scores) {
    try {
        if (scores.length === 0) {
            throw new Error("No scores available");
        }
        return scores.reduce((total, score) => total + score, 0) / scores.length;
    } catch (error) {
        console.log(`Could not calculate average: ${error.message}`);
        return null;
    }
}

for (const s of studentsWithEdgeCase) {
    const average = getAverageSafe(s.scores);

    if (average === null) {
        console.log(`${s.name} (Year ${s.year}): No average available - Ungraded`);
    } else {
        const grade = classify(average);
        console.log(`${s.name} (Year ${s.year}): Average = ${average.toFixed(1)} -> ${grade}`);
    }
}

// Week 9 - Task 01: Grab & Change

const heading = document.querySelector("#main-heading");
const paragraph = document.querySelector("#main-paragraph");

heading.textContent = "Welcome to My Interactive Page";
paragraph.style.color = "#1565c0";

// Week 9 - Task 02: Click Counter

const counterBtn = document.querySelector("#counter-btn");
const counterDisplay = document.querySelector("#counter-display");

let clickCount = 0;

counterBtn.addEventListener("click", () => {
    clickCount++;
    counterDisplay.textContent = clickCount;
});

// Week 9 - Task 03: Toggle a Theme

const themeToggleBtn = document.querySelector("#theme-toggle-btn");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Week 9 - Task 04: Build a List from Data

const courses = [
    "Object Oriented Programming",
    "Introduction to Web Development",
    "Statistics",
    "Data Structures & Algorithms",
    "Database Systems"
];

const courseList = document.querySelector("#course-list");
const addCourseBtn = document.querySelector("#add-course-btn");

courseList.innerHTML = courses.map((course) => `<li>${course}</li>`).join("");

addCourseBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Machine Learning";
    courseList.appendChild(newItem);
});

// Week 9 - Task 05: Live Search Filter

const courseSearch = document.querySelector("#course-search");

function renderCourses(courseArray) {
    courseList.innerHTML = courseArray.map((course) => `<li>${course}</li>`).join("");
}

courseSearch.addEventListener("input", () => {
    const searchTerm = courseSearch.value.toLowerCase();
    const filteredCourses = courses.filter((course) =>
        course.toLowerCase().includes(searchTerm)
    );
    renderCourses(filteredCourses);
});

// Week 9 - Task 06: Validate a Form

const signupForm = document.querySelector("#signup-form");
const signupName = document.querySelector("#signup-name");
const signupEmail = document.querySelector("#signup-email");
const formMessage = document.querySelector("#form-message");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = signupName.value.trim();
    const emailValue = signupEmail.value.trim();

    if (nameValue === "") {
        formMessage.textContent = "Name cannot be empty.";
        formMessage.className = "error";
        return;
    }

    if (!emailValue.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    formMessage.textContent = "Signed up successfully!";
    formMessage.className = "success";
});