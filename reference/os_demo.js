const os = require('os');

//Platform
console.log(os.platform());

//CPU Architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//Uptime - in seconds
console.log(os.uptime());