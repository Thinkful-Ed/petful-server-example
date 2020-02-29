const people = [
  'Person 1',
  'Person 2',
  'Person 3'
]

module.exports = {
  get() {
    return people
  },

  add(person) {
    people.push(person)
    return people
  },

  dequeue() {
    people.shift()
    return people
  }
}
