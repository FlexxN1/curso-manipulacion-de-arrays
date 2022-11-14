const numbers = [1,30,49,29,10,13];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        rta = element;
        break;
    }
}

console.log("For", rta)

//con Find
const rta2 = numbers.find(item => item === 30)
console.log("Find", rta2);


//Ejercicio
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);

/* 
Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

Estos procedimientos reciben dos argumentos:

La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
array.find(function(), thisArg)
array.findIndex(function(), thisArg)
La función, que recibe como argumento los métodos find y findIndex, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.find(function(element, index, array))
array.findIndex(function(element, index, array))
Diferencia entre la estructura for y los métodos find y findIndex
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que devuelva el primer elemento que sea mayor a 40 de un array.

Si utilizamos la estructura for, necesitaremos una variable con el valor undefined e iterar hasta que se cumpla la condición. La palabra reservada break rompe el ciclo repetitivo.

const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41
Si se necesita el índice, en lugar de una variable con el valor de undefined, debería estar un valor de -1. Y también cambiar el valor del elemento por el del índice del for.

Con los métodos find y findIndex, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

const numbers = [1, 30, 41, 29, 50, 60]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // 41
console.log(respuesta2) // 2
Recuerda que si los métodos find y findIndex no encuentran EL elemento, devolverán undefined y -1, respectivamente.

const numbers = ["a", "b", "c"]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // undefined
console.log(respuesta2) // -1
*/