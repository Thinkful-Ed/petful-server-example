const app = require('../app/app')
const request = require('supertest')

describe('Pets Routes', () => {
  describe('GET /pets', () => {
    it('responds with 200 status', () => {
      return request(app)
        .get('/pets')
        .expect(200)
    })
  })
})
