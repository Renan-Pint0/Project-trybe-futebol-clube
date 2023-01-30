import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import { login } from './mockData';
import userController from '../controllers/user.controller';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test the "/login" route', () => {
  afterEach(sinon.restore);
  it('With sucess', async () => {
    const user = await chai.request(app).post('/login').send(
      {
        "email": "string",
        "password": "string"
      }
    )
    expect(user.status).to.be.eq(200)
    expect(user.body).to.deep.eq(
      {
        token: "string" 
      }
    );
  });
  it('Failed with no email', async () => {
    const user = await chai.request(app).post('/login').send(
      {
        "password": "string"
      }
    )
    expect(user.status).to.be.eq(400)
    expect(user.body).to.be.deep.eq(
      { message: 'All fields must be filled' }
    );
  });
});
