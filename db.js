const path = require('path');
const fs = require('fs');

const uuid = require('uuid/v1');
const { promisify } = require('bluebird');
const writeFile = promisify(fs.writeFile);

const db = path.resolve(__dirname, 'todo.json');
let todoList = JSON.parse(fs.readFileSync(db));

module.exports = {
  save: ({ text }) => {
    const item = {
      text,
      id: uuid(),
    }
    todoList.push(item);
    return writeFile(db, JSON.stringify(todoList, null, 2))
      .then(() => item)
      .catch((err) => {
        this.refresh();
        throw err;
      });
  },

  all: () => {
    return Promise.resolve(todoList);
  },

  refresh: () => {
    todoList = JSON.parse(fs.readFileSync(db));
  },

  delete: ({ id }) => {
    const toRemove = todoList.map(record => record.id).indexOf(id);
    if (toRemove === -1) return null;
    const deleted = todoList.splice(toRemove, 1);
    return writeFile(db, JSON.stringify(todoList, null, 2))
      .then(() => deleted)
      .catch((err) => {
        this.refresh();
        throw err;
      });
  },
}
