var Component = require('./Component')

class Todo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    element.onclick = function () {
      dispatch({
        type: 'TOGGLE_TODO',
        index: index
      })
    }
  }

  render (state) {
    var element = this.element
    var index = this.index

    var todo = state.todos[index]

    var done = todo.done
    var what = todo.what

    if (element.childNodes.length === 0) {
      element.appendChild(document.createTextNode(what))
    }

    if (element.classList.contains('completed')) {
      if (!done) element.classList.toggle('completed')
    } else {
      if (done) element.classList.add('completed')
    }
  }
}

module.exports = Todo
