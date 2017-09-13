var Component = require('./Component')

var AddTodo = require('./AddTodo')
var TodoList = require('./TodoList')

class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.TodoList = new TodoList(dispatch, document.querySelector('ul.todo-list'))

    this.component.AddTodo = new AddTodo(dispatch, document.querySelector('.add-todo'))
  }
}

module.exports = Root
