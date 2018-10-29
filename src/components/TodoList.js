import Component from './Component'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    // Initialize child components as an empty list of todos.
    this.component = []
  }

  render (state) {
    var dispatch = this.dispatch

    for (let index = 0; index < state.todos.length; index++) {
      if (index < this.component.length) {
        this.component[index].render(state)
      } else {
        const todo = new Todo(dispatch, this.createElement('li'), index)
        this.component.push(todo)
        todo.render(state)
      }
    }
  }
}
