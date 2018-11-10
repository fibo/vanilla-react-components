import Component from './Component'

export default class ToggleTodo extends Component {
  constructor (dispatch, element, todoId) {
    super(dispatch, element)

    this.todoId = todoId

    element.addEventListener('click', this.onClick.bind(this))
    element.classList.add('toggle')
    element.type = 'checkbox'
  }

  onClick (event) {
    this.dispatch({
      type: 'TOGGLE_TODO',
      id: this.todoId
    })
  }

  render (state) {
    const { element } = this

    if (state.completed !== element.checked) {
      element.checked = state.completed
    }
  }
}
