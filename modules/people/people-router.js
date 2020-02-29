const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const people = [
  'Person 1',
  'Person 2',
  'Person 3'
]

router.get('/', (req, res) => {
  res.json(people)
})

router.post('/', json, (req, res) => {
  people.push(req.body.name)
  res.json(people)
})

module.exports = router
