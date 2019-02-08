const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// host root domain()

console.log(myUrl.host);

// also the hostname does not get port
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

//seralized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

// add  param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// loops through the params
myUrl.searchParams.forEach((value,name) =>{console.log(`${name}:${value}`)});