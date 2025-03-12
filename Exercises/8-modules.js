const names = require("./Exercises/4-names");

const sayHi = require('./Exercises/5-utils');



const data = require("./Exercises/6-alternative-flavor");

console.log(data)

require('./Exercises/7-mind-grenade');

const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user);

//method returns the syste uptime in seconds
console.log(os.uptime())

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    fremMem : os.freemem()

}

console.log(currentOS);