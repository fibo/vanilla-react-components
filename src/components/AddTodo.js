import Component from './Component'

export default class AddTodo extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    const button = element.querySelector('button')
    button.addEventListener('click', this.addTodo.bind(this))

    const input = this.input = element.querySelector('input')
    input.addEventListener('keydown', this.onkeydownInput.bind(this))
  }

  addTodo () {
    const {
      dispatch,
      input
    } = this

    if (input.value) {
      dispatch({
        type: 'ADD_TODO',
        text: input.value
      })

      input.value = ''
    } else {
      input.focus()
    }
  }

  onkeydownInput (event) {
    if (event.keyCode === 13) {
      this.addTodo()
    }
  }
}
