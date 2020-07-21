const validator = require('validator')
const notes = require('./notes.js')


console.log(validator.isEmail('azarateo@gmail.com'))
console.log(validator.isEmail('gmail.com'))
console.log(validator.isURL('https://www.google.com'))