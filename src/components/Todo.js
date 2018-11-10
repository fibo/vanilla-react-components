import Component from './Component'
import DeleteTodo from './DeleteTodo'
import ToggleTodo from './ToggleTodo'

export default class Todo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    const view = this.createElement('div')
    view.classList.add('view')

    this.component.toggle = new ToggleTodo(dispatch, this.createElement('input', view), index)

    this.content = this.createElement('label', view)

    this.component.deleteButton = new DeleteTodo(dispatch, this.createElement('button', view), index)
  }

  render (state) {
    const {
      element,
      index
    } = this

    const {
      completed,
      text
    } = state.todos[index]

    if (text !== this.text) {
      this.content.innerHTML = text
      this.text = text
    }

    if (completed !== this.completed) {
      if (completed) {
        element.classList.add('completed')
      } else {
        element.classList.remove('completed')
      }

      this.completed = completed
    }
  }
}
