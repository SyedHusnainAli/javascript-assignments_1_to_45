const john = {
    name: 'john',
    age: 40,
    num: 20,
    pass: 'true',
    married:  'true'
}

// true
console.log(john.age >= 40 && john.married)
console.log(john.age <= 55 && john.married)
console.log(john.num <= 25 && true)

const truely = 'false';
console.log(typeof true === 'boolean');

const num_1 = 8 + 5;
const num_2 = 5 + 8;
console.log(num_2 === num_1);

/// false statement
console.log(john.age >= 45 && johm.married)
console.log(john.age >= 55 && johm.unmarried)
console.log(john.num >= 25 && true)
console.log(john.num <= 25 && false)
console.log(john.num > 125 && john.pass)

// if(john.age >= 45 && johm.married){
//     console.log("married")
// }else{
//     console.log("unmarried")
// }

