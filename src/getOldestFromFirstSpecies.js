const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoaColaboradora = data.employees.find((pessoa) => pessoa.id.includes(id));
  const primeiraRes = pessoaColaboradora.responsibleFor.find((primeira) => primeira);
  const animal = data.species.find((animalId) => animalId.id.includes(primeiraRes));
  const maisVelho = animal.residents.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
