const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    console.log('Adding note with title ' + title + ' and body' + body);
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title === title)
    if (notesToKeep.length === 0) {
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote)
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully'))
    }
    else {
        console.log(chalk.red.inverse('Title already taken!'))
    }

}

const saveNotes = (notes) => {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const notes = JSON.parse(fs.readFileSync('./notes.json'))
        return notes
    } catch (error) {
        return []
    }
}

const removeNote = (title) => {
    console.log('Removing note with title ' + title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title != title)
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('Title not found!'))
    }
    else {
        console.log(chalk.green.inverse('Note with title ' + title + ' removed'))
    }
    saveNotes(notesToKeep)

}

const readNote = (title) => {
    console.log('Reading note with title ' + title)
}

const listNotes = () => {
    console.log('Listing all notes')
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}