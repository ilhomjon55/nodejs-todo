const { Todos } = require('./Todos.js');

const todos = new Todos();

// **********************************
// Add | Remove | SetStatus todos

todos.add('Play').add('Swim').add('ilhom').remove(2).add('Farruh');

// **********************************

console.table(todos.todos);
module.exports.data = todos.todos;
