let starWarsHeroes = [
  { name: "Luke Skywalker", gender: "male" },
  { name: "C-3PO", gender: "robot" },
  { name: "R2-D2", gender: "robot" },
  { name: "Darth Vader", gender: "male" },
  { name: "Leia Organa", gender: "female" },
  { name: "Obi-Wan Kenobi", gender: "male" }
];

//Podemos usar a função map para fazer transformações em itens de um array:

//Vamos adicionar um 'Sr.' para homens, um Sra. para mulheres. No caso de robos, não adicionamos nada.
let senhoresSenhoras = starWarsHeroes.map(heroi => {
  if (heroi.gender == "male") return `Sr. ${heroi.name}`;
  if (heroi.gender == "female") return `Sra. ${heroi.name}`;

  return heroi.name;
});
console.log("Senhoras e Senhores do StarWars: ", senhoresSenhoras);

//A função map requer que passemos uma função por parâmetro.
//Nessa função, é passado o item do array que está sendo transformado.
//O retorno da função é o que será colocado no array de retorno para cada item
