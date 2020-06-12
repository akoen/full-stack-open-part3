const mongoose = require('mongoose');

if (![3, 5].includes(process.argv.length)) {
  console.log('Please enter all required information: node mongo.js [<password> <name> <number>]');
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const dbName = 'people';
const url = `mongodb+srv://fullstack:${password}@cluster0-k1j4f.mongodb.net/${dbName}?retryWrites=true&w=majority`;
console.log(`Connecting to ${url}`);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 5) {
  const person = new Person({
    name: name,
    number: number,
    date: new Date(),
  });

  person.save().then((result) => {
    console.log(`added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  });
} else if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}
