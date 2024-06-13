function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function (a, b){
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b); 
    } else {
      return a - b;
    }
  });
}

module.exports = ordenarArray;
