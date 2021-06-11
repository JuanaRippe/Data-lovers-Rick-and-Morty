import { filtrarEspecie,  } from '../src/data.js';


describe('Función filtrarEspecie', () => {
  it('is a function', () => {
    expect(typeof filtrarEspecie).toBe('function');
  });

  it('el filtro Unknown debería retornar 5 personajes', () => {
    expect(filtrarEspecie("Unknown")).toHaveLength(5);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/

