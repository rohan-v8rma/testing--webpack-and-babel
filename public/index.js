import getCars from './getCars'

console.log("Inside index.js LOL");

getCars();


const obj = {a: "alpha", b: "bravo"};
// Using the spread operator, which is not supported by most browsers at this time
const newObj = {...obj, c: "charlie"}