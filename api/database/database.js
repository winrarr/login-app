var sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database("database/studerende.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.')
    }
})


module.exports = db
