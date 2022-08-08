const data = require('../data/zoo_data');
//-------------------------------------------------------------------------------------
const semParametro = () => data.employees.map((element) => {
  const obje = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map((animalId) => data.species
      .find((comp) => comp.id.includes(animalId)).name),
    locations: element.responsibleFor.map((animalId) => data.species
      .find((comp) => comp.id.includes(animalId)).location),
  };
  return obje;
});
//-------------------------------------------------------------------------------------
let busca;
//--------------------------------------------------------------------------------------
const comParametro = () => {
  const objeParam = {
    id: busca.id,
    fullName: `${busca.firstName} ${busca.lastName}`,
    species: busca.responsibleFor.map((animalId) => data.species
      .find((comp) => comp.id.includes(animalId)).name),
    locations: busca.responsibleFor.map((animalId) => data.species
      .find((comp) => comp.id.includes(animalId)).location),
  };
  return objeParam;
};
//-------------------------------------------------------------------------------------
function getEmployeesCoverage(obj) {
  if (!obj) {
    return semParametro();
  }
  if (obj.name) {
    busca = data.employees.find((nome) => nome.firstName === obj.name
      || nome.lastName === obj.name);
  }
  if (obj.id) {
    busca = data.employees.find((elementId) => elementId.id === obj.id);
  }
  if (!busca) {
    throw new Error('Informações inválidas');
  }
  return comParametro();// função principal tendo que ser chamada no final do código para que o test de erro funcione, porque se ela fosse chamada antes da exessao seria retornada uma erro sem ser a exessao;
}

module.exports = getEmployeesCoverage;
