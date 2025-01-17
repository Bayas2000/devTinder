const express = require('express')
const app = express()
const dotenv = require('dotenv'); dotenv.config()

const PORT = process.env.PORT
app.use('/', (req, res, next) => {
    // res.send('Hello World')
    next()
})

app.use('/', (req, res) => {
    res.send('Hello World3')
})
app.listen(PORT, () => {
    console.log(`server is Listening Port No ${PORT}`)
})