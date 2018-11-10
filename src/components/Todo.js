import Component from './Component'
import DeleteTodoButton from './DeleteTodoButton'

export default class Todo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    const view = this.createElement('div')

    const toggle = this.createElement('input', view)
    todo.classList.add('toggle')
    todo.checked = true

    this.content = this.createElement('label', view)

    this.component.deleteButton = new DeleteTodoButton(dispatch, this.createElement('button', view), index)

    element.addEventListener('click', this.toggle.bind(this))
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

    /*
    if (completed !== this.completed) {
      if (completed) {
        element.classList.add('completed')
      } else {
        element.classList.remove('completed')
      }

      this.completed = completed
    }
    */
  }

  toggle () {
    this.dispatch({
      type: 'TOGGLE_TODO',
      index: this.index
    })
  }
}
