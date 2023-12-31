const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const app = express()

const PORT = process.env.PORT || 3001

const todoRouter = require('./controllers/todo')

app.use(express.json())
app.use(cors('http://localhost:3000', 'https://downhillmtbfantasy.onrender.com'))
app.use(todoRouter)

mongoose.connect(process.env.DATABASEURL,
    { useNewUrlParser: true, }
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


