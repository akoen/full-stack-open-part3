const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

const PORT = 3001;

let persons = [
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
    id: 4,
  },
];

// GET requests
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  const date = new Date();
  res.send(`Phonebook has info for ${persons.length} people. <br/><br/>${date}`);
});

app.get('/api/persons/:id', (req, res) => {
  const id = +req.params.id;
  const person = persons.find((i) => i.id === id);

  if (person) res.json(person);
  else res.status(404).end();
});

// DELETE requests
app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id;

  persons = persons.filter((i) => i.id !== id);

  res.status(204).end();
});

// POST requests
app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (persons.find((i) => i.name === body.name)) {
    res.status(400).json({ error: 'name must be unique' });
  } else if (persons.find((i) => i.number === body.number)) {
    res.status(400).json({ error: 'number must be unique' });
  } else {
    const person = {
      ...body,
      id: Math.floor(Math.random() * 1000),
    };

    persons = persons.concat(person);

    res.json(person);
  }
});

app.listen(PORT);
console.log(`Server running on ${PORT}`);
