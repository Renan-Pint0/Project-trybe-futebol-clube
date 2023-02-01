import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test the "/teams" route', () => {
  describe('"/" With sucess', () => {
    it('return 200', async () => {
      const user = await chai
      .request(app)
      .get('/teams')
      expect(user.status).to.equal(200)
    });
  })
  it('"/:id" With sucess', async () => {
    const user = await chai.request(app).get('/teams/:id')
    expect(user.status).to.be.eq(200)
    expect(user.body).to.deep.eq(
      {
        id: "number",
        teamName: "string"
      }
    );
  });
});
