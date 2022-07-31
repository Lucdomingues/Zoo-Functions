const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const verificar = data.species.filter((element) => ids.includes(element.id));
  return verificar;
}

module.exports = getSpeciesByIds;
