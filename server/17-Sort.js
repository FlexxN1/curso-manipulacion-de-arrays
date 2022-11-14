const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);
  console.log(orders);



  /*
  El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.

Este proceso recibe un argumento:

Una función de comparación que compara cada elemento con otro. Por defecto, evalúa el valor Unicode del caracter.
let sortedArray = array.sort(function())
La función comparativa, que recibe como argumento el método sort, utiliza dos parámetros:

El primer elemento a comparar.
El segundo elemento a comparar.
array.sort(function(first, second))
Si la función comparativa retorna un número mayor que 0, entonces el primer elemento se sitúa antes que el segundo. Si es menor que 0, entonces el segundo elemento se sitúa antes que el primero. Esto es importante, ya que ordenar los elementos por el valor Unicode provoca resultados inesperados.

Ordenamiento de palabras
Si ordenas un array de palabras, puede ordenar correctamente por el valor Unicode de los caracteres de la palabra. Sin embargo, en algunos navegadores o entornos de ejecución (como Node) puede que esto falle, por lo tanto, debes utilizar la función localeCompare.

Ten en cuenta que las mayúsculas, minúsculas y caracteres con tilde tienen un valor Unicode diferente, por lo que debes asegurarte que todas las palabras estén en la misma condición.

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]

words.sort((a,b) => a.localeCompare(b))
// [ 'adieu', 'banana', 'café', 'communiqué', 'éclair', 'premier', 'réservé' ]
Ordenamiento de números
Si ordenas un array de números, provoca un ordenamiento inesperado porque ordena por el valor Unicode de los caracteres del número.

const numbers = [1, 30, 4, 21, 100000]
numbers.sort() 
console.log(numbers)
// [ 1, 100000, 21, 30, 4 ]
Para arreglar este comportamiento, es necesario utilizar la siguiente función comparativa:

De manera ascendente (a, b) => a - b
De manera descendente (a, b) => b - a
// Ascendente
const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a,b) => a - b) 
console.log(numbers)
// [ 1, 4, 21, 30, 100000 ]

// Descendente
const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a,b) => b - a) 
console.log(numbers)
// [ 100000, 30, 21, 4, 1 ]
Ordenamiento de objetos por su propiedad
A partir de la función comparativa puedes ordenar los elementos de cualquier forma. Cuando necesites ordenar un array de objetos, compara una propiedad de tipo numérica de la misma forma que el ordenamiento de números, ya sea de manera descendente o ascendente.

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
Por ejemplo, creemos un algoritmo que ordene los pedidos del array orders por su valor total.

orders.sort((a,b) => a.total - b.total)

console.log(orders)
/* [
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  },
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true
  }
]
*/