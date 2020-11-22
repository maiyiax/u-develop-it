// Import dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database.js');

const apiRoutes = require('./routes/apiRoutes');

// Express middleware to handle JSON parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// to ensure that the Express.js server doesn't start before the connection to the database has been established, wrap the server connection inside an event handler
db.on('open', () => {
    // add listener
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});