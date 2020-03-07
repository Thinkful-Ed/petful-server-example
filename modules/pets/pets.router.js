const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  const pets = Pets.get()
  res.json(pets)
})

router.delete('/', json, (req, res) => {
  const adopted = Pets.dequeue(req.body.type).name
  const adopter = People.dequeue()

  const message = `${ adopter } adopted ${ adopted }.`
  const { cat, dog } = Pets.get()

  res.json({
    cat,
    dog,
    message
  })
})

module.exports = router
