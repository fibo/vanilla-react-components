import Component from './Component'
import DeleteTodo from './DeleteTodo'
import Edit from './Edit'
import ToggleTodo from './ToggleTodo'

export default class Todo extends Component {
  constructor (dispatch, element, id) {
    super(dispatch, element)

    this.id = id

    const view = this.createElement('div')

    this.view = view

    view.classList.add('view')

    view.addEventListener('dblclick', this.ondblclick.bind(this))

    this.component.toggle = new ToggleTodo(dispatch, this.createElement('input', view), id)

    this.content = this.createElement('label', view)

    this.component.deleteButton = new DeleteTodo(dispatch, this.createElement('button', view), id)
  }

  createEdit () {
    const {
      dispatch,
      id,
      view
    } = this

    const edit = this.component.edit = new Edit(dispatch, this.createElement('input'), id)

    return edit
  }

  destroyEdit () {
    if (this.component.edit) {
      this.component.edit.destroy()

      delete this.component.edit
    }
  }

  ondblclick () {
    const {
      dispatch,
      id
    } = this

    dispatch({
      type: 'EDIT_TODO',
      id
    })
  }

  render (state) {
    const { element } = this

    const {
      completed,
      filtered,
      text
    } = state

    if (filtered !== this.filtered) {
      this.filtered = filtered

      if (filtered) {
        element.style.display = 'none'
      } else {
        element.style.display = 'block'
      }
    }

    if (text !== this.text) {
      this.content.innerHTML = text
      this.text = text
    }

    if (completed !== this.completed) {
      if (completed) {
        element.classList.add('completed')
      } else {
        element.classList.remove('completed')
      }

      this.completed = completed
    }

    if (state.editing !== this.editing) {
      this.editing = state.editing

      if (this.editing) {
        this.element.classList.add('editing')

        const edit = this.createEdit()

        edit.element.value = text

        edit.element.focus()
      } else {
        this.element.classList.remove('editing')

        this.destroyEdit()
      }
    }

    this.renderComponents(state)
  }
}
