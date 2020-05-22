const express = require('express');
const app = express();

const PORT = 3001;

const persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '123',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Marry Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  const date = new Date();
  res.send(`Phonebook has info for ${persons.length} people. <br/><br/>${date}`)
})

app.listen(PORT);
console.log(`Server running on ${PORT}`);
