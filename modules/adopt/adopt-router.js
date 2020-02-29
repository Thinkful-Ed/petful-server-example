const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

router.post('/', json, (req, res) => {
  res.json({})
})

module.exports = router
