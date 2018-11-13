import Component from './Component'

import Filters from './Filters'
import ClearCompleted from './ClearCompleted'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import ToggleAll from './ToggleAll'

export default class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.ClearCompleted = new ClearCompleted(dispatch, document.querySelector('.clear-completed'))

    this.component.Filters = new Filters(dispatch, document.querySelector('.filters'))

    this.component.TodoList = new TodoList(dispatch, document.querySelector('.todo-list'))

    this.component.ToggleAll = new ToggleAll(dispatch, document.querySelector('.toggle-all'))

    this.component.NewTodo = new NewTodo(dispatch, document.querySelector('.new-todo'))
  }
}
