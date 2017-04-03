var Component = require('./Component')

class AddTodo extends Component {
  constructor (element, dispatch) {
    super(element)

    var input = element.querySelector('input')

    var button = element.querySelector('button')

    button.onclick = function () {
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
  }
}

module.exports = AddTodo
