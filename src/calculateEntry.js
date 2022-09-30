const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const object = { child, adult, senior };
  return object;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Array.isArray(entrants) === false) {
    return 0;
  }

  const total = countEntrants(entrants);
  const { child, adult, senior } = total;
  const sum = child * prices.child + adult * prices.adult + senior * prices.senior;

  return sum;
}

module.exports = { calculateEntry, countEntrants };
