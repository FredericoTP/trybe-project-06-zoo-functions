const data = require('../data/zoo_data');

const { species } = data;

const getLocations = () => {
  const allLocations = species.map((specie) => specie.location);
  const location = [...new Set(allLocations)];

  return location;
};

const noParam = () => {
  const locations = getLocations();
  const array = [];
  const object = {};
  locations.forEach((location) => {
    array.push(species.filter((specie) => specie.location === location)
      .map((element) => element.name));
  });
  locations.forEach((location, index) => {
    object[location] = array[index];
  });
  return object;
};

const animalsName = (name) => {
  const obj = {};
  const animal = species.filter((specie) => specie.name === name);
  const animalName = animal[0].residents.map((resident) => resident.name);
  obj[animal[0].name] = animalName;
  return obj;
};

const animalsNameSorted = (name) => {
  const obj = {};
  const animal = species.filter((specie) => specie.name === name);
  const animalName = animal[0].residents.map((resident) => resident.name);
  obj[animal[0].name] = animalName.sort();
  return obj;
};

const animalsNameBySex = (name, sex) => {
  const obj = {};
  const animal = species.filter((specie) => specie.name === name);
  const animalBySex = animal[0].residents.filter((resident) => resident.sex === sex);
  const animalName = animalBySex.map((element) => element.name);
  obj[animal[0].name] = animalName;
  return obj;
};

const animalsNameBySexSorted = (name, sex) => {
  const obj = {};
  const animal = species.filter((specie) => specie.name === name);
  const animalBySex = animal[0].residents.filter((resident) => resident.sex === sex);
  const animalName = animalBySex.map((element) => element.name);
  obj[animal[0].name] = animalName.sort();
  return obj;
};

const paramIncludeName = () => {
  const locations = getLocations();
  const array = [];
  const array2 = [];
  const object = {};
  locations.forEach((location) => {
    array.push(species.filter((specie) => specie.location === location)
      .map((element) => element.name));
  });
  array.forEach((element) => array2.push(element.map((element2) => animalsName(element2))));
  locations.forEach((location, index) => {
    object[location] = array2[index];
  });

  return object;
};

const paramIncludeNameSex = (obj) => {
  const values = Object.values(obj);
  const locations = getLocations();
  const array = [];
  const array2 = [];
  const object = {};
  locations.forEach((location) => {
    array.push(species.filter((specie) => specie.location === location)
      .map((element) => element.name));
  });
  array.forEach((element) => array2.push(element
    .map((element2) => animalsNameBySex(element2, values[1]))));
  locations.forEach((location, index) => {
    object[location] = array2[index];
  });

  return object;
};

const paramIncludeNameSort = () => {
  const locations = getLocations();
  const array = [];
  const array2 = [];
  const object = {};
  locations.forEach((location) => {
    array.push(species.filter((specie) => specie.location === location)
      .map((element) => element.name));
  });
  array.forEach((element) => array2.push(element.map((element2) => animalsNameSorted(element2))));
  locations.forEach((location, index) => {
    object[location] = array2[index];
  });

  return object;
};

const threeParam = (obj) => {
  const values = Object.values(obj);
  const locations = getLocations();
  const array = [];
  const array2 = [];
  const object = {};
  locations.forEach((location) => {
    array.push(species.filter((specie) => specie.location === location)
      .map((element) => element.name));
  });
  array.forEach((element) => array2.push(element
    .map((element2) => animalsNameBySexSorted(element2, values[1]))));
  locations.forEach((location, index) => {
    object[location] = array2[index];
  });

  return object;
};

const withParam = (options) => {
  if (Object.keys(options).length === 1) {
    return paramIncludeName();
  }
  if (Object.keys(options)[1] === 'sex' && Object.keys(options).length === 2) {
    return paramIncludeNameSex(options);
  }
  if (Object.keys(options).length === 2) {
    return paramIncludeNameSort();
  }
  return threeParam(options);
};

function getAnimalMap(options) {
  if (options === undefined || options === null || Object.keys(options)[0] !== 'includeNames') {
    return noParam();
  }
  if (Object.keys(options)[0] === 'includeNames') {
    return withParam(options);
  }
}

module.exports = getAnimalMap;
