function formatActiveAdultNames(data) {
  return data
    .filter((person) => person.active === true && person.age > 18)
    .map((person) => `${person.name} - ${person.age}`);
}

module.exports = formatActiveAdultNames;
