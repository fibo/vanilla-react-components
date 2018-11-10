import Component from './Component'

export default class ClearCompleted extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    element.addEventListener('click', this.onClick.bind(this))
  }

  onClick (event) {
    this.dispatch({
      type: 'CLEAR_COMPLETED'
    })
  }

  render (state) {
    if (state.showClearCompleted !== this.show) {
      this.show = state.showClearCompleted

      if (this.show) {
        this.element.style.display = 'block'
      } else {
        this.element.style.display = 'none'
      }
    }
  }
}
