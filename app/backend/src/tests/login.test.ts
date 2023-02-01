import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import Users from '../database/models/UserModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test the "/login" route', () => {
  describe('With sucess', () => {
    it('Must return status 200', async () => {
      const user = await chai
      .request(app)
      .post('/login')
      .send(
        {
          email: "string",
          password: "string"
        }
      )
      expect(user.status).to.equal(200)
    });
  });
  describe('Failed with no email', () => {
    it('Must return 400', async () => {
      const user = await chai
      .request(app)
      .post('/login')
      .send(
        {
          "password": "string"
        }
      )
      expect(user.status).to.be.eq(400)
      expect(user.body).to.be.deep.eq(
        { message: 'All fields must be filled' }
      );
    });
  })
  
});
