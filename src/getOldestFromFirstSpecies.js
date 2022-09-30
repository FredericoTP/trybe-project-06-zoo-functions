const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = person.responsibleFor[0];
  const animal = species.find((specie) => specie.id === firstSpecie);
  const animalSort = animal.residents.sort((a, b) => b.age - a.age);

  return [animalSort[0].name, animalSort[0].sex, animalSort[0].age];
}

module.exports = getOldestFromFirstSpecies;
