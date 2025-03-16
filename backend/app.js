const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const { connectDB } = require('./db');

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Đây là Backend API');
});

try {
	// mẫu
    const Template = require('./template');
    app.use('/api/template', Template);

} catch (err) {
    console.error('Error importing routes:', err.message);
}

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
