const data = require('../data/zoo_data');

function countAnimals(animal) {
  const verificaAnimal = data.species.find((especie) => especie.name === animal);
  return verificaAnimal;
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
