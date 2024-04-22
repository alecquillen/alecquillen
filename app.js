// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Defining the port number
const port = 3000;

// Middleware to parse urlencoded request bodies
app.use(express.urlencoded({ extended: true }));

// Route to serve the homepage
app.get('/', (req, res) => {
    // Sending the contact.html file when accessing the root URL
    res.sendFile(__dirname + '/contact.html');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    // Extracting the username from the request body
    const username = req.body.username;
    // Sending a response to the client
    res.send('Thank you for reaching out to me!');
});

// Starting the server and listening on the defined port
app.listen(port, () => {
    // Logging a message indicating that the server is running, 
    // along with the URL where the contact page can be accessed
    console.log(`Server is running on http://alecquillen.github.io/alecquillen/contact.html:${port}`);
});
