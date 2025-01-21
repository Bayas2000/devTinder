const express = require('express')
const app = express()
const dbConnect = require('./database/dbConnection')
const dotenv = require('dotenv');
const morgan = require('morgan');
const userModel = require('./models/user.model');
dotenv.config()
app.use(express.json())
app.use(morgan('dev'))
const PORT = process.env.PORT

app.post('/signup', async (req, res) => {
    try {
        console.log(req.body);

        const newUser = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password,
            age: req.body.age,
            gender: req.body.gender
        })

        await newUser.save()
        res.send('user Added')

    } catch (error) {
        res.status(500).send('Something Wend Wrong')
    }
})

dbConnect()
    .then(() => {
        console.log('Database Connection Established');
        app.listen(PORT, () => {
            console.log(`server is Listening Port No ${PORT}`)
        })
    })
    .catch(() => {
        console.log('Database Connection Failed');
    })




