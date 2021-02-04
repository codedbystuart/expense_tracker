import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';

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
