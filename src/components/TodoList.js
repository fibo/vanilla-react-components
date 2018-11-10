import Component from './Component'
import Todo from './Todo'

export default class TodoList extends Component {
  createTodo (id) {
    const todo = new Todo(this.dispatch, this.createElement('li'), id)

    this.component[id] = todo

    return todo
  }

  deleteTodo (id) {
    this.component[id].destroy()

    delete this.component[id]
  }

  render (state) {
    const { todos } = state

    // Remove deleted todos.

    Object.keys(this.component).forEach(id => {
      if (!todos[id]) {
        this.deleteTodo(id)
      }
    })

    // Render existing todos, create new ones.

    Object.keys(todos).forEach(id => {
      if (this.component[id]) {
        this.component[id].render(state.todos[id])
      } else {
        const todo = this.createTodo(id)

        todo.render(state.todos[id])
      }
    })
  }
}
