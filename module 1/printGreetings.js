var greetings = require('./greetings')

console.log('Swedish ' +
    greetings.sayHelloInSwedish() +
    ' & English ' +
    greetings.sayHelloInEnglish() +
    ' & Tatar ' +
    greetings.sayHelloInTatar()
)