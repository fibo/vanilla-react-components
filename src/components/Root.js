import Component from './Component'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.TodoList = new TodoList(dispatch, document.querySelector('.TodoList'))

    this.component.AddTodo = new AddTodo(dispatch, document.querySelector('.AddTodo'))
  }
}
