/*
Las funciones mutables consisten en cambiar el array original. Estos métodos son:

push
unshift
pop
shift
splice
sort
Método push
El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

const array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]
Método unshift
El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

const array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]
Método pop
El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

const array = [1,2,3,4]
const lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]
Método shift
El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

const array = [1,2,3,4]
const firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]
Método splice
El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.

El método splice recibe tres argumentos:

El índice donde comenzará a cambiar el array.
La cantidad de elementos que serán reemplazados.
Uno o varios elementos que reemplazarán a los originales del array.
array.splice(índice, cantidad, items)
array.splice(índice, cantidad, item1, item2, ..., itemN)
Ejemplos utilizando el método splice
const array = [1,2,3,4]
const elements = array.splice(2,1,"tres")
console.log(elements) // [3]
console.log(array) // [ 1, 2, 'tres', 4 ]

const array = [1,2,3,4]
const elements = array.splice(1,2,"dos", "tres")
console.log(elements) // [ 2, 3 ]
console.log(array) // [ 1, 'dos', 'tres', 4 ]
*/