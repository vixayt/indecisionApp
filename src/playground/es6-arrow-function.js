const square = function(x) {
     return x * x;   
};
   
const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntaxo

/*
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
*/
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Theodore Vixay'));