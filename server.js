const express = require('express');
const app = express();

app.use(express.json());

const mailRouter = require('./routes/mail');
app.use('/mail', mailRouter);

app.listen(3030, () => console.log('server started'));
