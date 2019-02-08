const http = require('http');
const path = require ('path');
const fs = require('fs');



const server = http.createServer((req,res) =>{
  if(req.url === '/'){
      fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
          if(err) throw err;
          res.writeHead(200,{'Content-type':'text/html'})
          res.end(content);

      })


  /*

  if(req.url === '/api/users'){
    const users = [
        {name:"treek"},
        { age: '24'},
        {height:73}
    ];
    res.writeHead(200,{'Content-Type':'applications/json'});
    res.end(JSON.stringify(users));

     
};

});
*/ // Bui;d file path
let filepath =  path.join(__dirname,'public', req.url === '/' ? 'index.html':req.url);

let extname= path.extname(filepath);

// intial content-tyle
let contentType = 'text/html';

// check ext and set content type
switch(extname){
    case '.js':
    contentType ='text/javascript'
    break;
    case '.css':
    contentType = 'text/css'
    break;
    case '.json':
    contentType = 'application/json'
    break;


}

//readFile
fs.readFile(filepath,(err,content) =>{
    if(err){
        if(err.code == 'ENOENT'){
            //Page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>{
             res.writeHead(200,{'Content-Type':'text/html'});
             res.end(content,'utf-8');
            })
    }
    else{
        // a server error
        res.writeHead(500);
        res.end(`Server error : ${err.code}`);
    }
}
 else{
     // success
     res.writeHead(200,{'Content-Type': contentType});
     res.end(content,'utf-8');
 }

})

}})


const PORT = process.env.PORT ||5000;


server.listen(PORT,() =>{
    console.log(`Server running on ${PORT}`);
});