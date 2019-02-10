const path = require('path');

const should = require("should");
const supertest = require("supertest");

const dbHandler = require(path.resolve(__dirname, '../Handlers/dbHandler/dbHandler'));

const server = supertest.agent("http://localhost:3001");

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

        // calling home page api
        server
            .get("/api/role")
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end((err,res) => {
                // HTTP status should be 200
                console.log(res);
                //res.status.should.equal(200);
                // Error key should be false.
                //res.body.error.should.equal(false);
                done();
            });
    });

});
