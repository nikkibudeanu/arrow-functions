/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

function addTwoNumbers(a, b){
    //code block
    return a+b;
}
let sum = addTwoNumbers(3,5)
console.log(sum);


// ES6
const addTwoNumbers2 = (c,d) => {
    return c + d;
}
let sum2 = addTwoNumbers2(3,5)
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 =(e, f) => e + f;
let sum3 = addTwoNumbers3(4, 5);
console.log(sum3)
// also valid --> const addTwoNumbers3 =(e, f) =>( e + f);

// Implicit Returns
const saySomething = message => console.log(message)
saySomething('Hello there!')

const sayHello = () => console.log('hello')
// Returning Multiple Lines



//ARROW FUNCTION CHALLENGE
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];
const averagePoints = (arr, subject) => {
    let allResultsInSubject = 0
    let howManyResults = 0
    for (let i in arr) {
            // I need to access each student seperately
            const studentObject = arr[i]
            // I need to access results value for each student
            const resultObject = studentObject["results"]
            // checks if student has this subjects, if he has, than adds to all results in subject
            if (subject in resultObject) {
                // result of a subject for a student
                oneResultInSubject = resultObject[subject]
                // ads one result in subject for each student to all results
                allResultsInSubject += parseInt(oneResultInSubject)
                howManyResults += 1
            }
    }
    // all results in subject i a sum of all results for all students
    // arr.lenght is a number of students in the array
    return allResultsInSubject / howManyResults
};
    let result = averagePoints(students, "maths");
    console.log(result)