export default class Component {
  constructor (dispatch, element) {
    this.dispatch = dispatch
    this.element = element

    this.component = {}

    // Every JS component class has its homonym CSS class counterpart.
    if (element) {
      element.classList.add(this.constructor.name)
    }
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
