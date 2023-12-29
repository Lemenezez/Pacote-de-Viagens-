console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(2, 1); //removendo item
// } else {
//     //a pessoa é menor de idade
//     if (estaAcompanhada == true) {
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(2, 1);
//     } else {

//         console.log("Não é maior de idade, não posso vender")
//     }
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade, não posso vender")
}

console.log("Embarque: \n\n")
if(idadeComprador >18 && temPassagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Não pode embarcar.")
}

console.log(listaDeDestinos);

// console.log(idadeComprador < 18)
// console.log(idadeComprador > 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
