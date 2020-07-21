const notes = require('./notes.js')
const chalk = require('chalk')

const command = process.argv[2]

if(command=='add'){
    console.log('Adding notes')
}else if(command=='delete'){
    console.log('Deleting notes')
}