const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // Update this to your frontend URL
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(express.json())
const usersDataJson =
  "C:/Users/PC/Desktop/practice/test_post_expressJs/users.json";

// stock our JSON data into users []
let users = [];
fs.readFile(usersDataJson, "utf8", (err, data) => {
  if (err) throw err;
  users = JSON.parse(data);
});

// Handle POST request to /signup
app.post('/signup', (req, res) => {
    const username = req.body.username;

    // Read JSON file containing user data
    // fs.readFile('users.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Error reading file:', err);
    //         res.status(500).json({ error: 'Internal server error' });
    //         return;
    //     }

        // Parse JSON data

        // Check if username already exists
        const userExists = users.some(user => user.username === username);
        console.log(userExists);
        // Send response indicating whether user exists
        
        res.json({ exists: userExists });
});

app.get("/api", (req, res) => {
    res.status(200).json(users);
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
