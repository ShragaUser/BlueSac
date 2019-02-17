process.env.NODE_ENV = 'test';
const path = require('path');
const request = require("supertest");
const { expect } = require("chai");

const app = require(path.resolve(__dirname, '../app'));
const dbHandler = require(path.resolve(__dirname, '../Handlers/dbHandler/dbHandler'));

const roleObj = {
    name: "tohnithan",
    unit: "matzov",
    rank: 1,
    description: "bla bla",
    requirements: "moshe",
    skills: "know english",
    approved_by: "kidon"
};

describe("#DELETE /api/role", () => {
    it("should delete all documents in role collection", (done) => {
        request(app)
            .delete("/api/role")
            .send({})
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body).to.equal('docs has been deleted!');

                done();
            });
    });
});

describe("#POST /api/role", () => {
    it("should add new role", (done) => {
        request(app)
            .post("/api/role")
            .send({newObj: roleObj})
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body).to.equal('object has been saved to db');

                done();
            });
    });
});

describe("#POST /api/role", () => {
    it("should return 412 status code", (done) => {
        request(app)
            .post("/api/role")
            .send({newObj: {}})
            .expect("Content-type", /json/)
            .expect(412) // THis is HTTP response
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;

                done();
            });
    });
});

describe("#POST /api/role", () => {
    it("should return 412 status code", (done) => {
        request(app)
            .post("/api/role")
            .send({})
            .expect("Content-type", /json/)
            .expect(412) // THis is HTTP response
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body.error).to.exist;

                done();
            });
    });
});

describe("#GET /api/role", () => {
    it("should return array of roles", (done) => {
        request(app)
            .get("/api/role")
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body).to.be.an('array');

                done();
            });
    });
});

describe("#GET /api/role?filter={name: \"tohnithan\"}", () => {
    it("should return array of roles", (done) => {
        request(app)
            .get("/api/role?")
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body).to.be.an('array');

                done();
            });
    });
});

describe("#GET /api/role?filter={}", () => {
    it("should return array of roles", (done) => {
        request(app)
            .get("/api/role?")
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                expect(res).to.exist;
                expect(res.body).to.exist;
                expect(res.body).to.be.an('array');

                done();
            });
    });
});

after(() => {
    dbHandler.closeConnection();
});