const Queue = require('../queue/Queue')
const Store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

Store.cats.forEach(cat => pets.cats.enqueue(cat))
Store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    return {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    }
  },

  dequeue(type) {
    return pets[`${ type }s`].dequeue()
  }
}
