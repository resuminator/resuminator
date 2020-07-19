const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("[INFO: DB] MongoDB database connection estabilished successfully");
})

const experienceRouter = require('./routes/experience');
const userRouter = require('./routes/users');

app.use('/experience', experienceRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`[INFO: EX] Resuminator Server running at ${port}`)
})