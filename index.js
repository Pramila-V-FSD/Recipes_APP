const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const db = require('./config/db');  // If using a separate file for DB connection

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use routes
app.use('/api', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
