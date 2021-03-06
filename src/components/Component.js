export default class Component {
  constructor (dispatch, element) {
    this.dispatch = dispatch
    this.element = element

    this.component = {}
  }

  createElement (qualifiedName, container) {
    const newElement = document.createElement(qualifiedName)

    if (container) {
      container.appendChild(newElement)
    } else {
      this.element.appendChild(newElement)
    }

    return newElement
  }

  destroy () {
    this.element.remove()
  }

  render (state) {
    this.renderComponents(state)
  }

  renderComponents (state) {
    const { component } = this

    Object.keys(component).forEach(function (key) {
      component[key].render(state)
    })
  }
}
