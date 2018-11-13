import Component from './Component'

import ClearCompleted from './ClearCompleted'
import Footer from './Footer'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import ToggleAll from './ToggleAll'

export default class Root extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.ClearCompleted = new ClearCompleted(dispatch, document.querySelector('.clear-completed'))

    this.component.TodoList = new TodoList(dispatch, document.querySelector('.todo-list'))

    this.component.ToggleAll = new ToggleAll(dispatch, document.querySelector('.toggle-all'))

    this.component.NewTodo = new NewTodo(dispatch, document.querySelector('.new-todo'))

    this.component.Footer = new Footer(dispatch, document.querySelector('.footer'))
  }

  /* mapStateToProps */

  render (state) {
    state.showClearCompleted = typeof Object.keys(state.todos).find(
      id => state.todos[id].completed
    ) === 'string'

    state.numItemsLeft = 0

    Object.keys(state.todos).forEach(id => {
      if (state.editingId === id) {
        state.todos[id].editing = true
      }

      if (!state.todos[id].completed) {
        state.numItemsLeft = state.numItemsLeft + 1
      }

      switch (state.filter) {
        case '':
          state.todos[id].filtered = false
        break
        case '#/active':
          state.todos[id].filtered = state.todos[id].completed
        break
        case '#/completed':
          state.todos[id].filtered = !state.todos[id].completed
        break
      }
    })

    this.renderComponents(state)
  }
}
