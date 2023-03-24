const objetos =  [
    {
     manzanas:3,
     peras:2,
     carne:1,
     jugos:5,
     dulces:2
    },
    {
     manzanas:1,
     sandias:1,
     huevos:6,
     jugos:1,
     panes:4
    }
   ]

// Otra forma
let newArray = [];
let total = 0;

objetos.forEach(objeto => {
    const keys = Object.keys(objeto)
    const values = Object.values(objeto)
    total += values.reduce((inicial, acc)=> inicial + acc)
    keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key)
    })
});

console.log(newArray);
console.log(total);
















// objetos.forEach(objeto => {
// 	const keys = Object.keys(objeto);
// 	const values = Object.values(objeto);
//     console.log(keys);

// 	total += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
//     console.log(total);
// 	keys.forEach(key => {
// 		if (!newArray.includes(key)) newArray.push(key);
// 	})
// })
// console.log(newArray);


//   const keys = Object.keys({...objetos[0], ...objetos[1]})
//   console.log(keys);