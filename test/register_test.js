process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const knex = require('knex');
const server = require('/');


const app = express();

describe('routes : users', () => {

    beforeEach((done) => {
        knex.migrate.rollback()
            .then(() => {
                knex.migrate.latest()
                    .then(() => {
                        knex.seed.run()
                            .then(() => {
                                done();
                            });
                    });
            });
    });

    afterEach((done) => {
        knex.migrate.rollback()
            .then(() => {
                done();
            });
    });

});

describe('GET /users', () => {
    it('should respond with all users', (done) => {
        chai.request(server)
            .get('/users')
            .end(() => {
                //there should be no errors
                should.not.exist(err);
                //there should be a 200 status code
                res.status.should.equal(200);
                //the response should be json
                res.type.should.equal('application/json');
                //JSON res key-value pair of {status: success}
                res.body.status.should.eql('success');
                //JSON res key-value pair of {data: 2 user objects}
                res.body.data.length.should.eql(2);
                //should have all keys
                res.body.data[0].should.include.keys(
                    'id', 'first', 'last', 'email', 'password'
                );
                done();
            });
    });
});
