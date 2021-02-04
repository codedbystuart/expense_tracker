const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// const should = chai.should();

chai.use(chaiHttp);

describe('Application renders', () => {
  it('it should start the application', (done) => {
    chai.request(server.get('/').end((_err, res) => {
      expect(res.status).to.eq(200);
      done();
    }));
  });
});
