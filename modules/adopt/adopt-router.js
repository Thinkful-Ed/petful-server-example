const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const People = require('../people/people-service')
const Pets = require('../pets/pets-service')

router.post('/', json, (req, res) => {
  const adopted = Pets.get()[req.body.type].name
  const person = People.get()[0]

  const people = People.dequeue()
  const pets = Pets.dequeue(req.body.type)

  res.json({
    people,
    cat: pets.cats[0],
    dog: pets.dogs[0],
    message: `${ person } adopted ${ adopted }.`
  })
})

module.exports = router
