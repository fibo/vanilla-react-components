import Component from './Component'

export default class ToggleAll extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    element.addEventListener('click', this.onClick.bind(this))
  }

  onClick (event) {
    this.completed = !this.completed
    console.log(this.completed)

    this.dispatch({
      type: 'TOGGLE_ALL',
      completed: this.completed
    })
  }
}
