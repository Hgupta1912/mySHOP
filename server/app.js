require('dotenv').config();
const path = require("node:path");
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const prisma = require("./db/prisma.js");

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
    headers: true,
});
app.use(limiter);

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//logs all requests for debugging
// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next()
// })



//get all products and get a spec9fic porduct
app.get('/api/products', async (req, res, next) => {

});

app.get('/api/products/:productId', async (req, res, next) => {

});


app.use((err, req, res, next) => {
    console.error(`ERROR: ${req.method} ${req.url}`, {
        body: req.body,
        error: err.stack
    });
    res.status(err.statusCode).json({
        success: false,
        status: err.statusCode || 500,
        message: err.message || 'Internal server error',
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port 3000..."));