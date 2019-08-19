const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
console.log(myUrl.href);
// host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname); //same but does not get port

//pathname
console.log(myUrl.pathname);

//query params
console.log(myUrl.search);


myUrl.searchParams.append('abc', '123');

console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));