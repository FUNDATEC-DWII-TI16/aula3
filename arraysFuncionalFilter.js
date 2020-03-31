let starWarsHeroes = [
  { name: "Luke Skywalker", gender: "male" },
  { name: "C-3PO", gender: "robot" },
  { name: "R2-D2", gender: "robot" },
  { name: "Darth Vader", gender: "male" },
  { name: "Leia Organa", gender: "female" },
  { name: "Obi-Wan Kenobi", gender: "male" }
];

//Podemos filtrar arrays e retornar novos arrays com o resultado do filtro:

//Vamos buscar apenas as heroínas do starwars
let heroinas = starWarsHeroes.filter(heroi => {
  return heroi.gender == "female";
});
console.log("Heroínas no StarWars: ", heroinas);

//A função filter requer que passemos uma função por parâmetro.
//Nessa função, é passado o item do array que está sendo avaliado.
//Caso a função retorne verdadeiro, o item será incluido na lista de resultado final, caso contrário, será filtrado.

//Agora vamos buscar apenas os robôs
let robos = starWarsHeroes.filter(heroi => {
  return heroi.gender == "robot";
});
console.log("Robôs no StarWars: ", robos);
