// assignment no.24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.

// • Tests for equality and inequality with strings
const javascript = 'javascript';
const typescript = 'typescript';
console.log(javascript === typescript);

// • Tests using the lower case function
const myName = 'HUSNAIN';
console.log(myName === 'HUSNAIN');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num_1 = 3 - 5;
const num_2 = 5 - 3;
console.log(num_1 === num_2)
console.log(num_1 > num_2)
console.log(num_2 < num_1)

const falsyAnd = '' && 'no-space';
console.log(falsyAnd);

const falsyOr = '' || false;
console.log(falsyOr);


const myName_2 = 'HUSNAIN';
const names = ['adil', 'ali', 'nadeem'];
const filterName = names.filter(name => name === myName_2);
console.log(filterName)