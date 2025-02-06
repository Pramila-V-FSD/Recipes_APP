const mongoose = require('mongoose');

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/recipesApp')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
