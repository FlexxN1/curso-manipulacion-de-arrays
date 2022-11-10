const items = [1,3,2,3];

const rta = items.reduce((acumulador, item)=> {
    if(!acumulador[item]){
        acumulador[item] = 1;
    }else {
        acumulador[item] = acumulador[item] + 1;
    }

    return acumulador
}, {});