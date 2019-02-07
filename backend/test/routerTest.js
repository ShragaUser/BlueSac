const path = require('path');
const test = require('tape');
const request = require('supertest');
const app = require(path.resolve(__dirname, '../app'));

const roleObj = {
    name: "tohnithan",
    unit: "sapir",
    rank: 1,
    description: "bla bla",
    requirements: "moshe",
    skills: "know english",
    approved_by: "kidon"
};

test('POST /role', (test) => {
    request(app)
        .post('/api/role')
        .send({ newObj: roleObj })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            test.error(err, 'No error');
            test.same(res.body, "object has been saved to db", 'role as expected');
            test.end();
        });
});

test('GET /role', (test) => {
    request(app)
        .get('/api/role')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let expectedObj = [roleObj];
            test.error(err, 'No error');
            test.same(res.body, expectedObj, 'role as expected');
            test.end();
        });
});

