const {sort, sortPersonasDesc, sortPersonasAsc} = require('../ejercicios/07');

describe('sort function tests', () => {
   it('should sort array of objects in descending order by given key', () => {
      const sortBy = 'a';
      const list = [
         { a: 1, b: 3 },
         { a: 3, b: 2 },
         { a: 2, b: 40 },
      ];
      const expectedResult = [
         { a: 3, b: 2 },
         { a: 2, b: 40 },
         { a: 1, b: 3 },
      ];

      const result = sort(sortBy, list);

      expect(result).toEqual(expectedResult);
   });
});




describe('sortPersonasDesc function tests', () => {
   it('should sort array of personas in descending order by given key', () => {
      const propiedad = 'nombre';
      const listPersonas = [
         { nombre: "pepe", edad: 3 },
         { nombre: "lia", edad: 2 },
         { nombre: "nacho", edad: 40 },
      ];
      const expectedResult = [
         { nombre: "pepe", edad: 3 },
         { nombre: "nacho", edad: 40 },
         { nombre: "lia", edad: 2 },
      ];

      const result = sortPersonasDesc(propiedad, listPersonas);

      expect(result).toEqual(expectedResult);
   });
});


describe('sortPersonasAsc function tests', () => {
   it('should sort array of personas in descending order by given key', () => {
      
      const listPersonas = [
         { nombre: "pepe", edad: 3 },
         { nombre: "lia", edad: 2 },
         { nombre: "nacho", edad: 40 },
      ];
      const expectedResult = [
         { nombre: "lia", edad: 2 },
         { nombre: "nacho", edad: 40 },
         { nombre: "pepe", edad: 3 },
      ];

      const result = sortPersonasAsc('nombre', listPersonas);

      expect(result).toEqual(expectedResult);

      const expectedResultEdad = [
         { nombre: "lia", edad: 2 },
         { nombre: "pepe", edad: 3 },
         { nombre: "nacho", edad: 40 },
      
      ];

      const result2 = sortPersonasAsc('edad', listPersonas);

      expect(result2).toEqual(expectedResultEdad);
   });
});