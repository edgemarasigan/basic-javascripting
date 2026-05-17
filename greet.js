const myName = "EJ";

const greet = (name) => {
  return `Hey ${name}, what's up!`;
};

const classmates = ["Ana", "Ben", "Carlo", "Maria", "Jose", "Sofia"];

const results = classmates.map(name => greet(name));
console.log(results);

module.exports = { greet, classmates };