const cats = [
  {
    age: 5,
    breed: 'Tabby',
    description: 'The furry kind.',
    gender: 'Female',
    image: 'https://loremflickr.com/200/200/cat',
    name: 'Cat 1',
    story: 'A story about the cat.'
  },

  {
    age: 2,
    breed: 'Tabby',
    description: 'The furry kind.',
    gender: 'Female',
    image: 'https://loremflickr.com/200/200/cat',
    name: 'Cat 2',
    story: 'A story about the cat.'
  },

  {
    age: 3,
    breed: 'Tabby',
    description: 'The furry kind.',
    gender: 'Female',
    image: 'https://loremflickr.com/200/200/cat',
    name: 'Cat 3',
    story: 'A story about the cat.'
  }
]

const dogs = [
  {
    age: 2,
    breed: 'Mutt',
    description: 'The kind that barks.',
    gender: 'Male',
    image: 'https://loremflickr.com/200/200/dog',
    name: 'Dog 1',
    story: 'A story about the dog.'
  },

  {
    age: 3,
    breed: 'Mutt',
    description: 'The kind that barks.',
    gender: 'Male',
    image: 'https://loremflickr.com/200/200/dog',
    name: 'Dog 2',
    story: 'A story about the dog.'
  },

  {
    age: 4,
    breed: 'Mutt',
    description: 'The kind that barks.',
    gender: 'Male',
    image: 'https://loremflickr.com/200/200/dog',
    name: 'Dog 3',
    story: 'A story about the dog.'
  }
]

module.exports = {
  get() {
    return {
      cat: cats[0],
      dog: dogs[0]
    }
  }
}
