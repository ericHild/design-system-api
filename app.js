const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

const router_colors = require('./routes/colors');
const router_button = require('./routes/button');

app.use(cors());

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Welcome to the Design System API 🥳');
});

app.use('/design-system/api/v1', router_colors);
app.use('/design-system/api/v1', router_button);

app.listen(port, (error) => {
    if(!error) {
        console.log("Server is Successfully Running, and App is listening on port "+ port);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});