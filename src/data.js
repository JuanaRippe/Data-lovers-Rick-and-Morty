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
export function filtrarGenero (data, condicionGenero) {
  let Generos = data.filter (genero => genero.gender === condicionGenero);
  return Generos;
}

/* ORDENAR */
export function ordenar (data, sortBy, sortOrder) {
  //console.log(data);
  let ordenarNombres = data.sort((a, b) =>{
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0; 
  });
  if(sortOrder === "ascendente"){
    return ordenarNombres;
  }else{
    return ordenarNombres.reverse()
  }
  //console.log(ordenarNombres.reverse());

  /*let ordenarNombresDescendente = data.sort((a, b) =>{
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }
    if (a[sortBy] < b[sortBy]) {
      return 1;
    }
    return 0; 
  });
  console.log(ordenarNombresDescendente);
   if(sortOrder == "ascendente"){
     return ordenarNombres;
   }else {
     return ordenarNombresDescendente;
   }*/  
   
}
