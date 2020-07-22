const yargs = require('yargs')
yargs.version('1.1.1')
yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function(){
        console.log('Adding a note')
    }
})
