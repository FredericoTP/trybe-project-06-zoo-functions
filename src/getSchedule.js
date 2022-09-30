const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getScheduleAnimal = (scheduleTarget) => {
  const nameAnimal = species.find((specie) => specie.name === scheduleTarget);

  return nameAnimal.availability;
};

const getAnimalDays = (day) => species.filter((specie) => specie.availability.includes(day))
  .map((specie) => specie.name);

const getHour = (day) => hours[day];

const getScheduleDay = (day) => {
  if (day === 'Monday') {
    return {
      [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  return {
    [day]: {
      officeHour: `Open from ${getHour(day).open}am until ${getHour(day).close}pm`,
      exhibition: getAnimalDays(day),
    },
  };
};

const getDay = (day) => {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return {
    officeHour: `Open from ${getHour(day).open}am until ${getHour(day).close}pm`,
    exhibition: getAnimalDays(day),
  };
};

const getScheduleAllDays = () => ({
  Tuesday: getDay('Tuesday'),
  Wednesday: getDay('Wednesday'),
  Thursday: getDay('Thursday'),
  Friday: getDay('Friday'),
  Saturday: getDay('Saturday'),
  Sunday: getDay('Sunday'),
  Monday: getDay('Monday'),
});

function getSchedule(scheduleTarget) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const animals = species.map((specie) => specie.name);
  if (animals.includes(scheduleTarget)) {
    return getScheduleAnimal(scheduleTarget);
  }
  if (weekdays.includes(scheduleTarget)) {
    return getScheduleDay(scheduleTarget);
  }
  return getScheduleAllDays();
}

module.exports = getSchedule;
