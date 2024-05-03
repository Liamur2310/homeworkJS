function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
if (x === y){
  return x 
}else if (x > y ){
  return x
}else {
  return y
} 
}

console.log(obtenerMayor(10, 10));
console.log(obtenerMayor(5, 7));
console.log(obtenerMayor(7, 5));

module.exports = obtenerMayor;
