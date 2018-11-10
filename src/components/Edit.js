import Component from './Component'

export default class Edit extends Component {
  constructor (dispatch, element, todoId) {
    super(dispatch, element)

    this.todoId = todoId

    element.classList.add('toggle')

    element.addEventListener('keydown', this.onkeydown.bind(this))
  }

  onkeydown (event) {
    if (event.keyCode === 13) {
      this.updateTodo()
    }
  }

  render (state) {
    console.log(state)
  }

  updateTodo () {
    const {
      dispatch,
      element
    } = this

    if (element.value) {
      dispatch({
        type: 'UPDATE_TODO',
        text: element.value
      })

      element.value = ''
    } else {
      element.focus()
    }
  }
}

