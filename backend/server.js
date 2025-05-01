// server.js
const express = require('express');
const cors = require('cors');
const homepageRoutes = require('./routes/homepage');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/homepage', homepageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
