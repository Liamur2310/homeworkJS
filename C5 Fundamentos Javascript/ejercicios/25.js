function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

console.log(combinarNombres("lia", "mur"));
console.log(combinarNombres("Roberto", "Rodriguez"));

module.exports = combinarNombres;
