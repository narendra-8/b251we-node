const os = require('os');
console.log("free memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("version ", os.version());
console.log("processor ", os.cpus());