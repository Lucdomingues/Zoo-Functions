const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((boleano) => boleano.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const gerente = isManager(managerId);
  if (gerente === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const analisaId = data.employees.filter((element) => element.managers.includes(managerId));
  return analisaId.map((colaboradoras) => `${colaboradoras.firstName} ${colaboradoras.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
