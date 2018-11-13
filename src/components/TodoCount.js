import Component from './Component'

export default class TodoCount extends Component {
  render (state) {
    const { numItemsLeft } = state

    if (this.numItemsLeft !== numItemsLeft) {
      this.numItemsLeft = numItemsLeft

      this.element.innerHTML = `<strong>${numItemsLeft}</strong> item${numItemsLeft === 1 ? '' : 's'} left`
    }
  }
}
