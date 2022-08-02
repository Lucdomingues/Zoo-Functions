const data = require('../data/zoo_data');

const semParametro = () => {
  const test = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  return test;
};

function countAnimals(animal) {
  if (!animal) {
    return semParametro();
  }
  const { specie, sex } = animal;
  const procurada = data.species.find((element) => element.name === specie);
  if (sex) {
    return procurada.residents.filter((element) => element.sex === sex).length;
  }
  return procurada.residents.length;
}
countAnimals({ specie: 'penguins', sex: 'female' });
module.exports = countAnimals;
