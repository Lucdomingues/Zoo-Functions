const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const pessoaColaboradora = data.employees.find((element) => element.firstName === employeeName
    || element.lastName === employeeName);
  return pessoaColaboradora;
}

module.exports = getEmployeeByName;
