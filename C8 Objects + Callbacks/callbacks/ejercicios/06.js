function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let resultado = [];
  for (let i= 0; i< array.length; i++){
    resultado[i]= cb(array[i]);
  }
  return resultado;
}

module.exports = map;
