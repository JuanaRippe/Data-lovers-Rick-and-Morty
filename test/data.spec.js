import { filtrarEspecie,  } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.json';

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });


describe('Función filtrarEspecie', () => {
  it('is a function', () => {
    expect(typeof filtrarEspecie).toBe('function');
  });

  it('el filtro unknown debería retornar 5 personajes', () => {
    expect(filtrarEspecie(data.results, "unknown")).toHaveLength(5);
  });

  it('el filtro robot debería retornar 11 personajes', () => {
    expect(filtrarEspecie(data.results, "Robot")).toHaveLength(11);
  });
});




