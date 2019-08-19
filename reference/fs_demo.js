const fs = require('fs');
const path = require('path');

//create folder
/*fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
  if(err) throw err;
  console.log('Folder created...');

});
*/
//fs.mkdirSync(); //will wait until this is donw beofre resuming code

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello chunk!', function(err) {
//     if(err) throw err;
//     console.log('File written too');
//     //file append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love you!', function(err) {
//         if(err) throw err;
//         console.log('file appended');
//     });
//   });

// read data
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
  if(err) throw err;
  console.log(data);
});

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err, data) {
    if(err) throw err;
    console.log('file renamed...');
  });
