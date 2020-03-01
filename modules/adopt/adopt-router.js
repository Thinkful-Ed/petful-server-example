const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const People = require('../people/people-service')
const Pets = require('../pets/pets-service')

router.post('/', json, (req, res) => {
  const people = People.dequeue()
  const pets = Pets.dequeue(req.body.type)

  console.log({
    people,
    ...pets,
    message: 'Someone adopted someone.'
  })

  res.json({
    people,
    cat: pets.cats[0],
    dog: pets.dogs[0],
    message: 'Someone adopted someone.'
  })
})

module.exports = router
