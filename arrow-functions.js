

// function addTowNumbers(a, b){
// // Code block
// return a + b;

// }

const addTowNumbers = (a, b) => {
    return a + b;
}

// const addTowNumbers2 = (a, b) => (a + b); // valid
const addTowNumbers2 = (a, b) => a + b; // valid
let sum = addTowNumbers(3, 5);
console.log(sum);


const saySomething = message => console.log(message);
saySomething('Hello world!');

const saySomething2 = () => console.log('Hello world!');
saySomething2();

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
);

console.log(returnMultipleLines());
