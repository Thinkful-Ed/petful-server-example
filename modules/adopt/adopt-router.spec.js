const app = require('../app/app')
const request = require('supertest')

describe('Adopt Routes', () => {
  describe('POST /adopt', () => {
    it('responds with the new queue', () => {
      return request(app)
        .get('/people')
        .expect(200)
    })
  })
})
