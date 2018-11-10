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

    this.component.toggle = new ToggleTodo(dispatch, this.createElement('input', view), id)

    this.content = this.createElement('label', view)

    this.component.deleteButton = new DeleteTodo(dispatch, this.createElement('button', view), id)
  }

  createEdit () {
    const edit = new Edit(dispatch, this.createElement('input'), this.view)

    this.component.edit = edit

    return edit
  }

  destroyEdit () {
    this.component.edit.destroy()

    delete this.component.edit
  }

  render (state) {
    const { element } = this

    const {
      completed,
      text
    } = state

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

    if (state.edit !== this.edit) {
      if (state.edit) {
        this.edit = true
      } else {
        this.edit = false
      }

      if (this.edit) {
        const edit = this.createEdit()

        edit.render(state)
      } else {
        this.destroyEdit()
      }
    }

    this.renderComponents(state)
  }
}
