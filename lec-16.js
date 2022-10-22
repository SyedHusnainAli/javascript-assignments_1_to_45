const invite = ['Ali', 'Usman', 'Talha', 'Huzaifa', 'Shahzain', 'zain']


console.log(invite[0] + ", Please come to Dinner.")
console.log(invite[1] + ", Please come to Dinner.")
console.log(invite[3] + ", Please come to Dinner.")

console.log("\nSorry, " + invite + " can't make it to dinner.")


console.log(invite[4] + ", Please come to Dinner.")
console.log(invite[5] + ", Please come to Dinner.")

///add some more people to the list


//in start element
console.log(invite.unshift('Husnain'))

//end
console.log(invite.push('Shah'))

//in middle
console.log(invite.insert('Aqib'));

console.log(invite)