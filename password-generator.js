const generator = require('generate-password');

const password = generator.generate({
  length: 25,
  numbers: true
});

console.log(password);