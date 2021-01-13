const { Todos } = require('./Todos.js');

const todos = new Todos();

// **********************************
// Add | Remove | SetStatus todos

todos.add('Play').add('Swim');

// **********************************

console.table(todos.todos);
module.exports.data = todos.todos;
