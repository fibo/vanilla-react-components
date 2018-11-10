import Component from './Component'

import NewTodo from './NewTodo'
import TodoList from './TodoList'

export default class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.TodoList = new TodoList(dispatch, document.querySelector('.todo-list'))

    this.component.NewTodo = new NewTodo(dispatch, document.querySelector('.new-todo'))
  }
}
