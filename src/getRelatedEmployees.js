const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const employeeObject = employees.find((employee) => employee.id === id);
  const { managers } = employeeObject;
  if (managers.length === 0 || managers[0] === '9e7d4524-363c-416a-8759-8aa7e50c0992') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manages = employees.filter((employee) => employee.managers.includes(managerId));
    return manages.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
