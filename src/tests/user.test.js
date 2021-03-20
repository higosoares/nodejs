const assert = require('assert')
const supertest = require("supertest")
const app = require("../app");

describe('User Test', () => {
 it('return all users', (done) => {
    supertest(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
