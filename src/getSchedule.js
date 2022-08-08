const data = require('../data/zoo_data');

const horarios = Object.keys(data.hours);
const sla = horarios.reduce((acc, curr) => {
  const vi = acc + curr;
  return vi;
}, {});
console.log(sla);

function getSchedule(scheduleTarget) {
}
getSchedule();
// const daysWeek = {
//   horarios: {
//     officeHour: `Open from ${horarios.Tuesday.open}am until ${horarios.Tuesday.close}pm`,
//     exhibition: data.species.filter((element) => element.availability.includes('Tuesday'))
//       .map((animal) => animal.name),
//   },

// };
module.exports = getSchedule;
