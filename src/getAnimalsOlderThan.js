const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtro = data.species.find((element) => element.name === animal)
    .residents.every((elementI) => elementI.age >= age);
  return filtro;
}

module.exports = getAnimalsOlderThan;
