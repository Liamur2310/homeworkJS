function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  return numero === Math.floor (numero);
}

console.log(esNumeroEntero(24));
console.log(esNumeroEntero(5.5));

module.exports = esNumeroEntero;