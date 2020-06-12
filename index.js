require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const Person = require('./models/person');

morgan.token('object', (req, res) => {
  return JSON.stringify(req.body);
});

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('build'));

// GET requests

app.get('/info', (req, res) => {
  const date = new Date();
  res.send(`Phonebook has info for ${persons.length} people. <br/><br/>${date}`);
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
        .then((person) => {
          res.json(person);
        })
        .catch((error) => next(error));
});

// DELETE requests
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
        .then((result) => {
          res.status(204).end();
        })
        .catch((error) => next(error));
});

// POST requests

app.use(morgan(':object'));

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    return res.status(400).json({ error: 'name missing' });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
  });

  person.save().then((result) => {
    res.json(person);
  });
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if ((error.name = 'CastError')) {
    return res.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
