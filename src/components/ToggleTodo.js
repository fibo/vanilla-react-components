import Component from './Component'

export default class ToggleTodo extends Component {
  constructor (dispatch, element, index) {
    super(dispatch, element)

    this.index = index

    element.addEventListener('click', this.onClick.bind(this))
    element.classList.add('toggle')
    element.type = 'checkbox'
  }

  onClick (event) {
    this.dispatch({
      type: 'TOGGLE_TODO',
      index: this.index
    })
  }
}
