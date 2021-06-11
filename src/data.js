// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

/* FILTRAR */
//Especie
export function filtrarEspecie (data, condicionEspecie ) {
  let Especies = data.filter (especie => especie.species === condicionEspecie);
  return Especies;
}

//Genero
export function filtrarGenero (data, condicionGenero ) {
  let Generos = data.filter (genero => genero.gender === condicionGenero);
  return Generos;
}

/* ORDENAR */
