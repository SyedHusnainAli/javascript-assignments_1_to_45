const magicians = ["magicular", 'Ar magics', 'magic move'];


function show_magicians(magicians) {
    for(let m = 0; m < magicians.length; m++){
        console.log(`I'm ${magicians[m]}`);
    }
}

show_magicians(magicians)