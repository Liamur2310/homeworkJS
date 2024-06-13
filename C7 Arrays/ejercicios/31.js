function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let arrayTexto = texto.split('');
  let arrayInvertido = arrayTexto.reverse();
  let textoInvertido = arrayInvertido.join('');
  return textoInvertido;
}

module.exports = invertirTexto;
