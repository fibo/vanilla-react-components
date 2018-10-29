export default class Component {
  constructor (dispatch, element) {
    this.dispatch = dispatch
    this.element = element

    this.component = {}
  }

  createElement (qualifiedName) {
    const newElement = document.createElement(qualifiedName)

    this.element.appendChild(newElement)

    return newElement
  }

  render (state) {
    const { component } = this

    Object.keys(component).forEach(function (key) {
      component[key].render(state)
    })
  }
}
