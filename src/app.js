import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Root from './components/Root'
import reducer from './reducer'

/**
 * App loader.
 *
 * window.addEventListener('load', app(state))
 */

export default function app (initialState) {
  return function initApp () {
    const store = createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
      )
    )

    const root = new Root(store.dispatch)

    function listener () {
      const state = store.getState()

      root.render(state)
    }

    store.subscribe(listener)
  }
}
