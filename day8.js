//dispay system information
var os=require('os');
console.log('OS Type:' +os.type());
console.log('Platform:' +os.platform());
console.log('Total memory:' +os.totalmem()+'bytes');
console.log('Free memory:' +os.freemem()+'bytes');