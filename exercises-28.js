//if-else chain that determines a person’s stage of life.

const john = {
    name: 'john',
    age: 15,
}
// less than 2 years old

if(john.age < 2 ){
    console.log(john.name + 'is baby')
}else if(john.age > 2 && john.age < 4){
    console.log(john.name + "is a toddler")
}else if(john.age > 4 && john.age < 13){
    console.log(john.name + " is a kid")
}else if(john.age > 13 && john.age < 20){
    console.log(john.age + 'is a teenager')
}else if(john.age >= 13 && john.age < 65){
    console.log(john.name + "the person is an adult")
}else if(john.age >= 65){
    console.log(john.name + "the person is an elder")
}else{
    console.log(john.name + ' is a alien')
}