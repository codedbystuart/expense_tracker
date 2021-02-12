import express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).send({ message: 'Hello there' }));

const port = process.env.PORT || 5000;
app.listen(port);

export default app;
