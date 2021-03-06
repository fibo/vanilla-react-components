import { applyMiddleware, compose, createStore } from 'redux'

import { saveState } from './store/localStorage'
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
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
      )
    )

    const root = new Root(store.dispatch)

    function listener () {
      const state = store.getState()

      root.render(state)
    }

    store.subscribe(listener)

    // Persist state in localStorage.
    store.subscribe(() => {
      console.log(store.getState())

      saveState(store.getState())
    })

    // First rendering.
    root.render(store.getState())
  }
}
