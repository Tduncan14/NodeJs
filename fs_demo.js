const fs = require("fs");
const path = require('path');

//Create a folder

/*fs.mkdir(path.join(__dirname,'test'),{},(err) =>{
    if(err) throw err;
    console.log('Folder created')
});*/

// create and write to file
/*
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello Treek', (err)=>{
    if(err) throw err;
    console.log('File written to...');
     // this an append to

     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Keep Moving Forward', (err)=>{
        if(err) throw err;
        console.log('File written to...');
    });
});
*./ */

// read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data) =>{
    if(err) throw err
    console.log(data);
    console.log('reading a file');
});

// rename a file
fs.rename(path.join(__dirname, '/test','hello.txt'),path.join(__dirname,'/test','hellotext.txt'), (err) =>{
    if(err) throw err;
    console.log('File rename');

})