//const person = require('./person'); // ./ means same directory

//console.log(person);

/*
const Person = require('./person'); 

const person1 = new Person('scott zizzle', 45);

person1.greeting();
*/
/*
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('up yours');
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /* if(req.url === '/'){                                          //check if url req is main pg
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), 
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'}); // add header
                res.end(content);                                  // serve page
            }
        );
    }

    if(req.url === '/about'){                                          //check if url req is main pg
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'), 
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'}); // add header
                res.end(content);                                  // serve page
            }
        );
    }

    if(req.url === '/api/users') {                                          //check if url req is main pg
        const users = [
          { name: 'Scott Zizzle', age: 45},
          { name: 'John Doe', age: 25}   
        ];
        res.writeHead(200, {'Content-Type': 'application/json'}); // add header
        res.end(JSON.stringify(users));
    } */
    // build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 
    'index.html' : req.url);
    // console.log(filePath);
    // res.end();

    // Get extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html'

    // Check ext and switch content type

    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    //read file

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == 'ENOENT') {
             // Error Page
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, {'Content-Type': 'text/html'}); // add header
                    res.end(content, 'utf8');                                  // serve page
                })
            } else {
                // some server error
                res.writeHead(500); // add header
                res.end(`Server error: ${Err.code}`);    
            }
        } else {
            // sucess
            res.writeHead(200, {'Content-Type': contentType}); // add header
            res.end(content, 'utf8');  // serve page
        }                       
    });
});
const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));