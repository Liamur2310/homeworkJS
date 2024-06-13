function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   return list.sort((a, b) =>{
      if (a[sortBy] > b[sortBy]){
         return -1;
      }else if (a[sortBy] < b[sortBy]){
         return 1
      }else {
         return 0;
      }
   })
}

function sortPersonasDesc(propiedad, listPersonas) {
   // La función sort recibe dos parámetros:
   // prop: una propuedad de la persona (string).
   // listPersonas: un arreglo de objetos personas .
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("nombre", [{ nombre: 'Juan', edad: 3 }, { nombre: 'Pepe', edad: 10 }, { nombre: 'jaimito', edad: 40 }])
   // retorna --> [{ nombre: 'jaimito', edad: 40 }, { nombre: 'Juan', edad: 3 }, { nombre: 'Pepe', edad: 10 }]
   // Tu código:

   return listPersonas.sort((p1, p2) => {
      if (p1[propiedad] > p2[propiedad]){
         return -1;
      }else if (p1[propiedad] < p2[propiedad]){
         return 1
      }else {
         return 0;
      }
   })
}




function sortPersonasAsc(propiedad, listPersonas) {
   // La función sort recibe dos parámetros:
   // prop: una propuedad de la persona (string).
   // listPersonas: un arreglo de objetos personas .
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("nombre", [{ nombre: 'Juan', edad: 3 }, { nombre: 'Pepe', edad: 10 }, { nombre: 'jaimito', edad: 40 }])
   // retorna --> [{ nombre: 'jaimito', edad: 40 }, { nombre: 'Juan', edad: 3 }, { nombre: 'Pepe', edad: 10 }]
   // Tu código:

   return listPersonas.sort((p1, p2) => {
      if (p1[propiedad] > p2[propiedad]){
         return 1;
      }else if (p1[propiedad] < p2[propiedad]){
         return -1
      }else {
         return 0;
      }
   })
}


module.exports = {sort, sortPersonasDesc,sortPersonasAsc};