import Component from './Component'

import Filters from './Filters'
import TodoCount from './TodoCount'

export default class Footer extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    this.component.TodoCount = new TodoCount(dispatch, document.querySelector('.todo-count'))

    this.component.Filters = new Filters(dispatch, document.querySelector('.filters'))
  }
}
