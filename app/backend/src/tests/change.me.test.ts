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
    expect(user.body).to.be.deep.eq(
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
      }
    );
  });
});
