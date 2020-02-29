const express = require('express')
const cors = require('cors')

const adoptRouter = require('../adopt/adopt-router')
const peopleRouter = require('../people/people-router')
const petsRouter = require('../pets/pets-router')

const app = express()

app.use(cors())

app.use('/adopt', adoptRouter)
app.use('/people', peopleRouter)
app.use('/pets', petsRouter)

module.exports = app
