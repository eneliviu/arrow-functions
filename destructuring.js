// Destructuring arrays
let ages = [30,36,27];

let [john, marry, joe] = ages;
console.log(john, marry, joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets:
let languages = ["enghlish", "french", "german", "spanish", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage:"enghlish", 
    secondLanguage:"french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite, secondFavorite, others);

let favoriteFoods = {
    brian:'pizza', 
    anna:'pasta', 
    sarah:'vegetarian', 
    andrea:'steak'
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian, anna, rest);
