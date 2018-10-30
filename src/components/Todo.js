import Component from './Component'
import DeleteTodoButton from './DeleteTodoButton'

export default class Todo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    this.component.deleteButton = new DeleteTodoButton(dispatch, this.createElement('button'), index)

    this.content = this.createElement('span')

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

    if (completed !== this.completed) {
      if (completed) {
        element.classList.add('completed')
      } else {
        element.classList.remove('completed')
      }

      this.completed = completed
    }
  }

  toggle () {
    this.dispatch({
      type: 'TOGGLE_TODO',
      index: this.index
    })
  }
}
