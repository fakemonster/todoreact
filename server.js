const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const Todos = require('./db');

const app = express();
app.use(json());
app.use(cors());

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todos.all()
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db error' });
  }
});

app.post('/todos', async (req, res) => {
  const { text } = req.body;

  if (text) {
    try {
      const newTodo = await Todos.save({ text });
      res.json(newTodo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'db error' });
    }
  } else {
    res.status(400).json({ error: 'no text!' });
  }
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const deleted = await Todos.delete({ id });
      if (deleted) return res.json(deleted);
      res.status(404).json({ error: 'todo not found' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'db error' });
    }
  } else {
    res.status(400).json({ error: 'no id!' });
  }
});

app.listen(3005, () => console.log('listening on 3005'));
