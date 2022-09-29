const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  let animalsAge = false;
  species.forEach((specie) => {
    if (specie.name === animal) {
      animalsAge = specie.residents.every((resident) => resident.age >= age);
    }
  });

  return animalsAge;
}

module.exports = getAnimalsOlderThan;
