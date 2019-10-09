// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("V1", () => {
    describe("Todos /", () => {

        it("GET test", (done) => {
             chai.request(app)
                 .get('/api/v1/todos/get')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

        it("POST test", (done) => {
             const id = 1;
             chai.request(app)
                 .post('/api/v1/todos/add')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});