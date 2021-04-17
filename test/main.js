
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../main');
const expect = require("chai").expect;
const should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /GET route
  */
describe('/GET characters', () => {
    it('it should GET a page of characters', async () => {
      await chai.request(server).get('/characters').then(res => {
              res.should.have.status(200);
              res.body.data.should.be.a('object');
              res.body.data.results.length.should.be.eql(20)
          })
    });
});


describe('/GET comics', () => {
    it('it should GET a page of comics', async () => {
      await chai.request(server).get('/comics').then(res => {
              res.should.have.status(200);
              res.body.data.should.be.a('object');
              res.body.data.results.length.should.be.eql(20)
          })
    });
});

describe('/GET series', () => {
    it('it should GET a page of series', async () => {
      await chai.request(server).get('/series').then(res => {
            res.should.have.status(200);
            res.body.data.should.be.a('object');
            res.body.data.results.length.should.be.eql(20)
        })
    });
});

describe('/GET stories', () => {
    it('it should GET a page of stories', async () => {
        await chai.request(server).get('/stories').then(res => {
            res.should.have.status(200);
            res.body.data.should.be.a('object');
            res.body.data.results.length.should.be.eql(20)
        })
    });
});
/* asdasd */
describe('/GET search character', () => {
    it('it should GET searched character', async function () {
        await chai.request(server).get('/char?searchChar=x-man&searchPage=1').then(res => {
            expect(res.body.data.results[0].name).to.equal('X-Man')
            res.should.have.status(200);
            res.body.data.should.be.a('object');
            res.body.data.results.length.should.be.eql(1)
        })
    });
});