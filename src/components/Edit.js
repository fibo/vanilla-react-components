import Component from './Component'

export default class Edit extends Component {
  constructor (dispatch, element, todoId) {
    super(dispatch, element)

    this.todoId = todoId

    element.classList.add('edit')

    element.addEventListener('keydown', this.onkeydown.bind(this))
  }

  onkeydown (event) {
    if (event.keyCode === 13) {
      this.updateTodo()
    }
  }

  updateTodo () {
    const {
      dispatch,
      element,
      todoId
    } = this

    if (element.value) {
      dispatch({
        type: 'UPDATE_TODO',
        text: element.value,
        id: todoId
      })

      element.value = ''
    } else {
      element.focus()
    }
  }
}
