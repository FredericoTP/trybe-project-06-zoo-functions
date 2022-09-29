const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const speciesList = [];
  ids.forEach((id) => speciesList.push(species.find((specie) => (specie.id === id))));

  return speciesList;
}

module.exports = getSpeciesByIds;
