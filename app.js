const yargs = require('yargs')
yargs.version('1.1.1')
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title: {
            describe: 'Note title',
            required: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title:'+ argv.title)
    }
})
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})
yargs.command(
    {
       command: 'list',
       describe: 'List all nodes',
       handler: function(){
           console.log('Listing all nodes.')
       }
    }
)

yargs.parse()