const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const People = require('../people/people-service')
const Pets = require('../pets/pets-service')

router.post('/', json, (req, res) => {
  const adopted = Pets.dequeue(req.body.type).name
  const person = People.dequeue()

  const message = `${ person } adopted ${ adopted }.`
  const { cat, dog } = Pets.get()

  res.json({
    cat,
    dog,
    message,
    person,
  })
})

module.exports = router
