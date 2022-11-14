const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [3,4]]],
    [7,8,9]
]

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}

console.log("For", newArray)

//con Flat

const rta = matriz.flat(2);

console.log("Flat", rta);


/*
El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.

Este procedimiento recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
array.flat(profundidad)
Diferencia entre la estructura for y el método flat
Si se utiliza la estructura for para aplanar un array de arrays, es necesario utilizar otra estructura for para cada sub-nivel del array o recursión.

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

const flatArray = []

for(let i=0; i<matrix.length; i++){
  const array = matrix[i]
  for(let j=0; j<array.length; j++){
    flatArray.push(matrix[i][j])
  }
}

console.log(flatArray)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
Con el método flat solamente es necesario indicar la profundidad de aplanamiento del array.

const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/