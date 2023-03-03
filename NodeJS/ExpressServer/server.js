import express from 'express';

const port = 8080;
const app = express();

app.get('/test/:message', (req, res) => {
    console.log(ref.params.message);
    res.sendStatus(200);
});
app.listen(port);