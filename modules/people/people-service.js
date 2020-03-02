const Queue = require('../queue/Queue')
const Store = require('../../Store')

// Set up initial data.
// --------------------

const people = new Queue()
Store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    return Store.people
  },

  enqueue(person) {
    return people.enqueue(person)
  },

  dequeue() {
    return people.dequeue()
  }
}
