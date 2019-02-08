const path = require('path');


//Gets the base file name

console.log(path.basename(__filename));


//Directory name 
console.log(path.dirname(__filename));

// File extenstion
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

//Concatenate paths a.k.a joinings the paths together

console.log(path.join(__dirname,'test','hello.html'));