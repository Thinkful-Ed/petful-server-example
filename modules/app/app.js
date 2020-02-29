const express = require('express')
const cors = require('cors')
const petsRouter = require('../pets/pets-router')
const peopleRouter = require('../people/people-router')

const app = express()

app.use(cors())
app.use('/pets', petsRouter)
app.use('/people', peopleRouter)

module.exports = app
