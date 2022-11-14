const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}

const rta = elements.join("--")
console.log("For", rtaFinal)
console.log("Join", rta)

const title = "Curso de manipulacion de arrays";

const titleFinal = title.split(" ").join("-").toLowerCase(); 
console.log(titleFinal);



/* 
El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

La separación de cada elemento del array al unirlos.
array.join(separación)
Diferencia entre la estructura for y el método join
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Si utilizamos la estructura for para recrear el método join, necesitaremos una variable con el valor acumuladora con un string vacío y otra con el valor del separador. Se debe evaluar si existe elementos null o undefined, se lo puede realizar con el operador nullish coalescing.

const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log(acumulator) // 'hola//como/estas'
Con el método join solamente debemos establecer el separador de cada elemento como argumento.

const elements = ["hola", null, "como", "estas"]

const resultado = elements.join("/")

console.log(resultado) // 'hola//como/estas'
Método split de strings
El método split de strings, es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados.

Este método recibe dos argumentos:

El separador que especifica el conjunto de caracteres a separar en substrings.
El límite de elementos separados a retornar.
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

cadena.split(" ") 
/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
*/
cadena.split(", ") 
/* [ 
    'JavaScript es maravilloso', 
    'con JavaScript puedo crear el futuro de la web.' 
]*/
cadena.split("JavaScript")
/* [
    '', 
    ' es maravilloso, con ', 
    ' puedo crear el futuro de la web.' 
]*/
cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]
