var Component = require('./Component')

var AddTodo = require('./AddTodo')
var TodoList = require('./TodoList')

class Root extends Component {
  constructor (element, dispatch) {
    super(element, dispatch)

    this.component.TodoList = new TodoList(element.querySelector('ul.todo-list'), dispatch)

    this.component.AddTodo = new AddTodo(element.querySelector('.add-todo'), dispatch)
  }
}

module.exports = Root
