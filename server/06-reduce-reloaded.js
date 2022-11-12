const items = [1,3,2,3,3,1,10];

const rta = items.reduce((acumulador, item)=> {
    if(!acumulador[item]){
        acumulador[item] = 1;
    }else {
        acumulador[item] = acumulador[item] + 1;
    }

    return acumulador
}, {});

console.log(rta)

//Reto

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)