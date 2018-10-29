import Component from './Component'

export default class Todo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    element.addEventListener('click', this.toggle.bind(this))
  }

  render (state) {
    var element = this.element
    var index = this.index

    var todo = state.todos[index]

    var completed = todo.completed
    var text = todo.text

    if (element.childNodes.length === 0) {
      element.appendChild(document.createTextNode(text))
    }

    if (element.classList.contains('completed')) {
      if (!completed) element.classList.remove('completed')
    } else {
      if (completed) element.classList.add('completed')
    }
  }

  toggle () {
    const {
      dispatch,
      index
    } = this

    dispatch({
      type: 'TOGGLE_TODO',
      index
    })
  }
}
