// make_album()
function make_album(artist, title, noOfTrack = 10) {
    const album = {
        artist,
        title,
        track: noOfTrack
    } 
    return album
   }

   const johnAR = make_album('john AR', 'A long risk');
console.log(johnAR);

const roseAR = make_album('rose AR', 'A dimand piece');
console.log(roseAR);