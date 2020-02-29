const app = require('../app/app')
const request = require('supertest')

describe('People Routes', () => {
  describe('GET /people', () => {
    it('responds with 200 status', () => {
      return request(app)
        .get('/people')
        .expect(200)
    })
  })
})
