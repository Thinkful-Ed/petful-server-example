const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    cat: {
      age: 5,
      breed: 'Tabby',
      description: 'The furry kind.',
      gender: 'Female',
      image: 'https://loremflickr.com/200/200/cat',
      name: 'Cat 1',
      story: 'A story about the cat.'
    },

    dog: {
      age: 2,
      breed: 'Mutt',
      description: 'The kind that barks.',
      gender: 'Male',
      image: 'https://loremflickr.com/200/200/dog',
      name: 'Dog 1',
      story: 'A story about the dog.'
    }
  })
})

module.exports = router
