import Component from './Component'

import NewTodo from './NewTodo'
import TodoList from './TodoList'
import ToggleAll from './ToggleAll'

export default class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.TodoList = new TodoList(dispatch, document.querySelector('.todo-list'))

    this.component.ToggleAll = new ToggleAll(dispatch, document.querySelector('.toggle-all'))

    this.component.NewTodo = new NewTodo(dispatch, document.querySelector('.new-todo'))
  }
}
