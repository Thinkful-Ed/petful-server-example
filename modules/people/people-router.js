const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const People = require('./people-service')

router.get('/', (req, res) => {
  const people = People.get()
  res.json(people)
})

router.post('/', json, (req, res) => {
  const people = People.add(req.body.name)
  res.json(people)
})

module.exports = router
