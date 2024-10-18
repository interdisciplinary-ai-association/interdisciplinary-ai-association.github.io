const express = require('express');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

app.use("/", express.static(path.join(__dirname, '../public')));

module.exports = app;