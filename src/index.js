var app = require('./app')

var initialState = { todos: [{what: 'remember the milk'}] }

window.addEventListener('load', app(initialState))
