var Component = require('./Component')

class AddTodo extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    var button = element.querySelector('button')
    button.onclick = this.addTodo.bind(this)

    var input = element.querySelector('input')
    input.onkeydown = this.onkeydownInput.bind(this)
    this.input = input
  }

  addTodo () {
    var dispatch = this.dispatch
    var input = this.input

    if (input.value) {
      dispatch({
        type: 'ADD_TODO',
        what: input.value
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

module.exports = AddTodo
