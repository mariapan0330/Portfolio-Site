// following: https://www.youtube.com/watch?v=lBRnLXwjLw0
const express = require('express')
const cors = require('cors')
const appRoute = require('./routes/route.js')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://main--maria-panagos.netlify.app");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

// Routes
app.use('/api', appRoute)
// after the server route, you can specify /api/user/message to make a post request

app.listen(PORT, ()=> {
    console.log(`My server is running on http://localhost:${PORT} :)))`)
})