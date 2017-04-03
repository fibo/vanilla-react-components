var Root = require('./components/Root')
var getInitialState = require('./getInitialState')
var reducer = require('./reducer')

/**
 * App loader.
 *
 * window.addEventListener('load', app(state))
 */

function app (initialState) {
  return function () {
    var currentState = initialState || getInitialState()

    var render = Function.prototype

    function dispatch (action) {
      currentState = reducer(currentState, action)
      render(currentState)
    }

    var root = new Root(document, dispatch) // or use any other DOM element

    render = root.render.bind(root)
    render(currentState)
  }
}

module.exports = app
