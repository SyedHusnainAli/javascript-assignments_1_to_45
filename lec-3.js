const namePerson = 'syed husnain';

const convert = namePerson.toLowerCase();
console.log(convert)

const convert2 = namePerson.toUpperCase();
console.log(convert2);


function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(titleCase("I'm a little tea pot"));