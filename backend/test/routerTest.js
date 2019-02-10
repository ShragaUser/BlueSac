const path = require('path');
const should = require("should");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const dbHandler = require(path.resolve(__dirname, '../Handlers/dbHandler/dbHandler'));

const app = require('../app');

const roleObj = {
    name: "tohnithan",
    unit: "sapir",
    rank: 1,
    description: "bla bla",
    requirements: "moshe",
    skills: "know english",
    approved_by: "kidon"
};

describe("GET /api/role", () => {

    // #1 should return home page
    it("should return array of roles", (done) => {
        request(app)
            .get("/api/role")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end((err, res) => {
                expect(res).to.exist;
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                done();
            });
    });

});

