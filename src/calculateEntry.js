const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const verificaFaixa = { adult: 0, child: 0, senior: 0 };
  entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      verificaFaixa.child += 1;
    } else if (curr.age >= 18 && curr.age < 50) {
      verificaFaixa.adult += 1;
    } else if (curr.age >= 50) {
      verificaFaixa.senior += 1;
    }
    return verificaFaixa;
  }, '');
  return verificaFaixa;
}
function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const multAdult = obj.adult * data.prices.adult;
  const multChild = obj.child * data.prices.child;
  const multSenior = obj.senior * data.prices.senior;
  const total = multAdult + multChild + multSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
