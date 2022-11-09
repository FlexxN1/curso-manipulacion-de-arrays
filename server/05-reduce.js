//El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.

//Este método recibe dos argumentos:

/*
- La función que itera y reduce cada elemento del array. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función.
*/

let reducedValue = array.reduce(function(), initialValue)

//La función, que recibe como argumento el método map, utiliza cuatro parámetros:

/*
- El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.
*/
let reducedValue = array.reduce(
    function(acumulator,element, index, array), 
    valorInicial
)

/* Diferencia entre la estructura for y el método reduce
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un array.

Uso de la estructura for para una reducción
Si utilizamos la estructura for, necesitaremos una variable acumuladora para sumar los elementos en cada iteración.
*/

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145


/* Uso del método reduce para una reducción
Con el método reduce, solo debemos establecer la función que indique la reducción para cada elemento.
*/

/*
Iteración	Reducción
1	        5
2	        5 + 4**2 = 21
3	        21 + 8**2 = 85
4	        85 + 6**1 = 121
5	        121 + 2**2 = 125

Por lo que debes especificar el valor inicial para solucionar este problema.
*/

const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => (
    suma + number**2
), 0) // <- Valor inicial

console.log(reducedValue) // 145


/* De esta manera se ejecutará la función reductora adecuadamente.

Iteración	Reducción
1	        0 + 5**2 = 25
2	        25 + 4**2 = 41
3	        21 + 8**2 = 105
4	        85 + 6**1 = 141
5	        121 + 2**2 = 145
Si se ingresa otro valor inicial, por ejemplo 3, entonces cambiaría la primera iteración.

Iteración	Reducción
1	        3 + 5**2 = 28
2	        28 + 4**2 = 44
…	        …
5	        144 + 2**2 = 148
*/
