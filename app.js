import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.status(200).send({ message: 'Hello there' }));

app.listen(port, () => { console.log(`app is running on port ${port}`); });

module.exports = app;
