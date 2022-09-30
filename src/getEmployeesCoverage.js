const data = require('../data/zoo_data');

const { employees, species } = data;

const getAnimalLocation = (array) => {
  const location = [];
  array.forEach((element) => {
    species.forEach((specie) => {
      if (specie.id === element) {
        location.push(specie);
      }
    });
  });

  return location.map((element) => element.location);
};

const getAnimalName = (array) => {
  const name = [];
  array.forEach((element) => {
    species.forEach((specie) => {
      if (specie.id === element) {
        name.push(specie);
      }
    });
  });

  return name.map((element) => element.name);
};

const byName = (obj) => {
  const name = Object.values(obj);
  const nameEmployee = employees.find((employee) => employee.firstName === name[0]);
  const nameEmployee2 = employees.find((employee) => employee.lastName === name[0]);

  if (nameEmployee === undefined) {
    return {
      id: nameEmployee2.id,
      fullName: `${nameEmployee2.firstName} ${nameEmployee2.lastName}`,
      species: getAnimalName(nameEmployee2.responsibleFor),
      locations: getAnimalLocation(nameEmployee2.responsibleFor),
    };
  }
  return {
    id: nameEmployee.id,
    fullName: `${nameEmployee.firstName} ${nameEmployee.lastName}`,
    species: getAnimalName(nameEmployee.responsibleFor),
    locations: getAnimalLocation(nameEmployee.responsibleFor),
  };
};

const byId = (obj) => {
  const id = Object.values(obj);
  const nameEmployee = employees.find((employee) => employee.id === id[0]);

  if (nameEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  return {
    id: nameEmployee.id,
    fullName: `${nameEmployee.firstName} ${nameEmployee.lastName}`,
    species: getAnimalName(nameEmployee.responsibleFor),
    locations: getAnimalLocation(nameEmployee.responsibleFor),
  };
};

const allEmployees = () => {
  const all = [];
  employees.forEach((employee) => all.push(byId({ id: employee.id })));

  return all;
};

function getEmployeesCoverage(obj) {
  if (obj === undefined || obj === null) {
    return allEmployees();
  }
  if (Object.keys(obj)[0] === 'name') {
    return byName(obj);
  }
  if (Object.keys(obj)[0] === 'id') {
    return byId(obj);
  }
}

module.exports = getEmployeesCoverage;
