const fs = require('fs');

const addNote = function (title, body) {
    console.log('Adding note with title ' + title + ' and body' + body);
    const notes = loadNotes()
    const duplicates = notes.filter(function(note){
        return note.title === title
    })
    if (duplicates.length === 0) {
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote)
        saveNotes(notes)
    }
    else{
        console.log('Title already taken!')
    }
    
}

const saveNotes = function (notes) {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = function () {
    try {
        const notes = JSON.parse(fs.readFileSync('./notes.json'))
        return notes
    } catch (error) {
        return []
    }
}

const removeNote = function (title) {
    console.log('Removing note with title ' + title)
    const notes = loadNotes()
    const duplicates = notes.filter(note =>{
        return note.title != title
    })
    if (duplicates.length === notes.length) {
        console.log('Title not found!')
    }
    else{
        console.log('Note with title '+ title+' removed')
    }
    saveNotes(duplicates)

}

const readNote = function (title) {
    console.log('Reading note with title ' + title)
}

const listNotes = function () {
    console.log('Listing all notes')
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}