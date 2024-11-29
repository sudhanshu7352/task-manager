const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./src/routes/tasks');

app.use(express.json());
app.use('/tasks', tasks);

app.use((req, res) => {
    res.status(404).send({ error: 'Route not found' });
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
