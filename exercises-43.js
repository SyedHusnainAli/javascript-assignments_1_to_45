
const magicians = ["magicular", 'Ar magics', 'magic move'];

const greatMagicians = magicians.map(mag => `Great to the ${mag}`);

function show_magicians(magicians) {
    for(let m = 0; m < magicians.length; m++){
        console.log(magicians[m])
    }
}


//Magicians
show_magicians(magicians)
//greatMagicians
show_magicians(greatMagicians)