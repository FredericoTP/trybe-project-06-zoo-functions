const data = require('../data/zoo_data');

const { species } = data;

const animalsWithoutParam = () => {
  const object = {};
  species.forEach((specie) => {
    object[specie.name] = specie.residents.length;
  });
  return object;
};

const animalsWith1Param = (animal) => {
  const animalSpecie = Object.values(animal)[0];
  const animals = species.find((specie) => specie.name === animalSpecie);
  return animals.residents.length;
};

const animalsWith2Param = (animal) => {
  const animalSpecie = Object.values(animal)[0];
  const animalSex = Object.values(animal)[1];
  const animals = species.find((specie) => specie.name === animalSpecie);
  const { residents } = animals;
  const array = residents.filter((element) => element.sex === animalSex);

  return array.length;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return animalsWithoutParam();
  }
  if (Object.keys(animal).length === 1) {
    return animalsWith1Param(animal);
  }
  return animalsWith2Param(animal);
}

module.exports = countAnimals;
