class Component {
  constructor (element, dispatch) {
    this.element = element
    this.dispatch = dispatch

    this.component = {}
  }

  render (state, dispatch) {
    var component = this.component

    Object.keys(component).forEach(function (key) {
      component[key].render(state, dispatch)
    })
  }
}

module.exports = Component
