import Component from './Component'

export default class DeleteTodo extends Component {
  constructor (dispatch, element, todoId) {
    super(dispatch, element)

    this.todoId = todoId

    element.addEventListener('click', this.onClick.bind(this))
    element.classList.add('destroy')
  }

  onClick (event) {
    this.dispatch({
      type: 'DELETE_TODO',
      id: this.todoId
    })
  }
}
