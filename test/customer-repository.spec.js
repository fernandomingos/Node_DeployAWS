

const chai = require('chai');
const http = require('chai-http');
const subSet = require('chai-subset');
const { describe } = require('yargs');

const repository = require('../src/repositories/customer-repository');

chai.use(http);
chai.use(subSet);


describe('Teste repository customer', () => {
  it('getCustomers', () => {
    const customers = repository.get();
    chai.expect(customers).to.be.exist();
  })
})