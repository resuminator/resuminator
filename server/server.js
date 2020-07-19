const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`[INFO] Resuminator Server running at ${port}`)
})