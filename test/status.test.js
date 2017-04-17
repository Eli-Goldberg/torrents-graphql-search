
const app = require('../src/app');
const request = require('supertest-as-promised').agent(app.listen());

describe('status', function () {
  describe('status', function () {
    it('status should return OK', async function () {
      return await request.get('/status')
        .expect(200)
        .then(res => {
          res.body.status.should.equal('OK');
        });
    });
  });
});
