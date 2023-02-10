'use strict'

const {describe } = require("yargs");

describe('Testando customer repository', () => {
  it('Testando o JEST', () => {
    const esperado = 1;
    const retorno = 1;

    expect(retorno).toBe(esperado);
  })
})