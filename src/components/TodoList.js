import Component from './Component'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    // Initialize child components as an empty list of todos.
    this.component = []

    Object.defineProperties(this, {
      numTodos: {
        get: () => this.component.length
      }
    })
  }

  popTodo () {
    const todo = this.component.pop()

    todo.element.remove()
  }

  pushTodo () {
    const index = this.numTodos

    const todo = new Todo(this.dispatch, this.createElement('li'), index)

    this.component.push(todo)

    return todo
  }

  render (state) {
    // Render existing todos, create new todos.
    for (let index = 0; index < state.todos.length; index++) {
      if (index < this.numTodos) {
        this.component[index].render(state)
      } else {
        const todo = this.pushTodo()

        todo.render(state)
      }
    }

    // Remove deleted todos.
    for (let index = state.todos.length; index < this.numTodos; index++) {
      this.popTodo()
    }
  }
}
