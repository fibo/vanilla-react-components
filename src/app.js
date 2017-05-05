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
      if (process.env.NODE_ENV !== 'production') {
        console.time(action.type)
      }

      currentState = reducer(currentState, action)
      render(currentState)

      if (process.env.NODE_ENV !== 'production') {
        console.timeEnd(action.type)
      }
    }

    var root = new Root(document.body, dispatch) // or use any other DOM element

    render = root.render.bind(root)

    dispatch({ type: 'INIT' })
  }
}

module.exports = app
