import Component from './Component'

export default class NewTodo extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    element.addEventListener('keydown', this.onkeydown.bind(this))
  }

  addTodo () {
    const {
      dispatch,
      element
    } = this

    if (element.value) {
      dispatch({
        type: 'ADD_TODO',
        text: element.value
      })

      element.value = ''
    } else {
      element.focus()
    }
  }

  onkeydown (event) {
    if (event.keyCode === 13) {
      this.addTodo()
    }
  }
}
