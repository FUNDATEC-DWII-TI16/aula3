//Um array vazio
let arrayVazio = [];

/*Array com strings*/
let frutas = ["banana", "maçã", "uva"];

/*Array com números*/
let numerosPrimos = [2, 3, 5, 7, 11];

/*Array com objetos*/
let pessoas = [
  { nome: "Ciclano da Silva", idade: 23 },
  { nome: "Beltrano da Costa", idade: 45 }
];

/*Arrays com vários tipos de dados*/
let muitasCoisas = ["banana", 23, { nome: "Epaminondas Filho", idade: 71 }];

/*Podemos acessar índices específicos dentro de um array */
console.log("Fruta na segunda posição: ", frutas[1]);

/*Incluindo dados em um array*/
let numerosPares = [];
numerosPares.push(2);
numerosPares.push(4);
numerosPares.push(6);
numerosPares.push(8);
console.log("Números pares: ", numerosPares);

/*Excluindo dados de um array*/
numerosPares.push(5); //Ops... 5 não é par!
numerosPares.pop(); // Se o elemento a ser removido for o último, podemos usar o pop
console.log("Números pares sem o 5: ", numerosPares);

numerosPares.push(9); //Ops... 9 não é par!
numerosPares.push(10);
numerosPares.splice(4, 1); // Com splice, podemos remover elementos em qualquer posição do array. O primeiro parâmetro indica a posição do índice a ser removido. O segundo parâmetro indica quantos elementos a partir do primeiro parâmetro devem ser removidos.
console.log("Números pares sem o 9: ", numerosPares);

/*Iterando por um array */
//A função forEach requer que passemos uma função por parâmetro
//Nessa função, é passado o item do array que está sendo iterado.
console.log("Iterando pelas frutas:");
frutas.forEach(fruta => {
  console.log(fruta);
});

/* Propriedades length */
//A propriedade length em um array sempre vai indicar o seu tamanho
console.log("Total de frutas: ", frutas.length);
