//dispay system information
var os = require('os');
//This is for os type
console.log('OS Type:' + os.type());
 
console.log('Platform:' + os.platform());
 
console.log('Total Memory:' + os.totalmem() + 'bytes');
//This is Host name
console.log('Host Name:' + os.hostname)
//This is for Free memory
console.log('Free Memory:' + os.freemem() + 'bytes');