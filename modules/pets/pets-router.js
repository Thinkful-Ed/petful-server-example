const express = require('express')
const router = express.Router()

const Pets = require('./pets-service')

router.get('/', (req, res) => {
  const pets = Pets.get()
  res.json(pets)
})

module.exports = router
