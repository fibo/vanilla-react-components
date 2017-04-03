var Component = require('./Component')

class AddTodo extends Component {
  constructor (element, dispatch) {
    super(element)

    var input = element.querySelector('input')

    var button = element.querySelector('button')

    function addTodo () {
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

    button.onclick = addTodo

    input.onkeydown = function (event) {
      if (event.keyCode === 13) {
        addTodo()
      }
    }
  }
}

module.exports = AddTodo
