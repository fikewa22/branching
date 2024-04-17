const express = require('express');
     const bodyParser = require('body-parser');
     const app = express();
     const port = 3000;

     app.use(bodyParser.json());

// Define CRUD Endpoints
// Create a user
app.post('/users', (req, res) => {
    // Logic to create a new user (e.g., using a database library like Mongoose)
    res.send('User created');
  });
  
  // Get all users
  app.get('/users', (req, res) => {
    // Logic to retrieve all users
    res.send('List of all users');
  });
  
  // Get a single user
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to retrieve a single user by ID
    res.send(`User with ID ${userId}`);
  });
  
  // Update a user
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to update a user by ID
    res.send(`User with ID ${userId} updated`);
  });
  
  // Delete a user
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to delete a user by ID
    res.send(`User with ID ${userId} deleted`);
  });
     app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
     });