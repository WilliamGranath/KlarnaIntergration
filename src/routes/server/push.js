const express = require('express');
const app = express.Router();

// THIS ROUTE IS FOR THOSE WHO WANT TO GO ABOVE AND BEYOND
app.get('/push', async function (req, res, next) {
    const order_id = req.query.order_id;
    res.send('Use this route to acknowledge orders that Klarna asks your server about');
});

module.exports = app;