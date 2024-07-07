const summAll = (a, b, c) => a + b+ c;
let sum = summAll(1, 2, 3);
console.log(sum) 

// Extra arguments are ignored
let sum2 = summAll(1,2,3,4,5,6);
console.log('Sum2: ', sum2) 

// FUnction using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b +c;
    for(let i of rest ){
        sum += i;
    }
    return sum;
};
let sum3 = sumRest(1,2,3,4,5,6);
console.log('Sum3: ', sum3) 


