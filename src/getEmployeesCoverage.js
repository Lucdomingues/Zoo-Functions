const data = require('../data/zoo_data');

const semParametro = data.employees.map((element) => {
  const la = element.responsibleFor.reduce((acc, curr) => `${acc}, ${curr}`);
  const obje = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: data.species.filter((i) => i.id.includes(la)),
  };
  return obje;
});

function getEmployeesCoverage(obj) {
  return console.log(semParametro);
}
getEmployeesCoverage();
module.exports = getEmployeesCoverage;
