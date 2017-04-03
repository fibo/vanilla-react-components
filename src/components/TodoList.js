var Component = require('./Component')
var Todo = require('./Todo')

class TodoList extends Component {
  constructor (element, dispatch) {
    super(element, dispatch)

    this.component = []
  }

  render (state) {
    var dispatch = this.dispatch

    for (var index = 0; index < state.todos.length; index++) {
      if (index < this.component.length) {
        this.component[index].render(state)
      } else {
        var element = document.createElement('li')

        this.element.appendChild(element)

        var todo = new Todo(element, dispatch, index)
        this.component.push(todo)
        todo.render(state)
      }
    }
  }
}

module.exports = TodoList
