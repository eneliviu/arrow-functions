

// function addTowNumbers(a, b){
// // Code block
// return a + b;

// }

// const addTowNumbers = (a, b) => {
//     return a + b;
// }

// // const addTowNumbers2 = (a, b) => (a + b); // valid
// const addTowNumbers2 = (a, b) => a + b; // valid
// let sum = addTowNumbers(3, 5);
// console.log(sum);


// const saySomething = message => console.log(message);
// saySomething('Hello world!');

// const saySomething2 = () => console.log('Hello world!');
// saySomething2();

// const returnMultipleLines = () => (
//     `<p>
//         This is a multiline string!
//     </p>`
// );

// console.log(returnMultipleLines());

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

for (stud of students){
    console.log(stud.subjects)
}

