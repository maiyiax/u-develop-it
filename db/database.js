const sqlite3 = require('sqlite3').verbose();

// this code connects to the database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the election database.');
});


module.exports = db;