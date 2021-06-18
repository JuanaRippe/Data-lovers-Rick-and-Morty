import { filtrarEspecie, filtrarGenero, ordenar } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.json';

const pruebaPersonajes =[{ "name": "Rick Sanchez" }, {"name": "Summer Smith"}, {"name": "Beth Smith"}, {"name": "Jerry Smith"}]; 
const pruebaPersonajes2 =[{ "name": "Rick Sanchez" }, { "name": "Rick Sanchez" }, {"name": "Summer Smith"}, {"name": "Beth Smith"}, {"name": "Jerry Smith"}]; 
const AZ =[{"name": "Beth Smith"}, {"name": "Jerry Smith"}, {"name": "Rick Sanchez"}, {"name": "Summer Smith"}]; 
const AZ2 =[{"name": "Beth Smith"}, {"name": "Jerry Smith"}, {"name": "Rick Sanchez"}, {"name": "Rick Sanchez"}, {"name": "Summer Smith"}]; 
const ZA =[{"name": "Summer Smith"}, {"name": "Rick Sanchez"}, {"name": "Jerry Smith"}, {"name": "Beth Smith"}];


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

describe('Función filtrarGenero', () => {
  it('is a function', () => {
    expect(typeof filtrarGenero ).toBe('function');
  });

  it('El filtro male deberia retornar 372 personajes', () => {
    expect(filtrarGenero(data.results, "Male")).toHaveLength(372);
  });

  it('El filtro female deberia retornar 73 personajes', () => {
    expect(filtrarGenero(data.results, "Female")).toHaveLength(73);
  });

  it('El filtro unknown deberia retornar 0 personajes', () => {
    expect(filtrarGenero(data.results, "Unknown")).toHaveLength(0);
  });

  it('El filtro male deberia retornar 6 personajes', () => {
    expect(filtrarGenero(data.results, "Genderless")).toHaveLength(6);
  });
});

describe('Función ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('Debe retornar la lista de personajes ascendentemente', () => {
    expect(ordenar(pruebaPersonajes, "name", "ascendente")).toStrictEqual(AZ);
    //console.log(ordenar(pruebaPersonajes));
  });

  it('Debe retornar la lista de personajes descendentemente', () => {
    expect(ordenar(pruebaPersonajes, "name", "descendente")).toStrictEqual(ZA);
    //console.log(ordenar(pruebaPersonajes));
  });
  it('Debe retornar la lista de personajes ascendentemente', () => {
    expect(ordenar(pruebaPersonajes2, "name", "ascendente")).toStrictEqual(AZ2);
    //console.log(ordenar(pruebaPersonajes));
  });
  /*it('Debe retornar la lista de personajes ascendentemente', () => {
    expect(ordenar(pruebaPersonajes).equals(AZ)).toBe(true);
  });*/
});