const express = require('express');
const cors = require('cors'); // Import the CORS package
const app = express();
const port = 3000;

// Import the data routes
const dataRoutes = require('./routes/data');

// Use CORS middleware to allow requests from your frontend
app.use(cors());

// Use your API routes under the /api path
app.use('/api', dataRoutes);

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});