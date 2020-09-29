//Default parameter

const calAge = (birthYear, currentYear = 2020) => currentYear - birthYear;
console.log(calAge(1991,2021));