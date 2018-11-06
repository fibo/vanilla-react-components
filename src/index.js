import app from './app'

import { loadState } from './localStorage'

// let initialState

// try {
//   const state = loadState()
//   console.log(state)
//   const persistedState = JSON.parse(window.localStorage.getItem('tasks:state'))

//   initialState = persistedState
// } catch (ignore) {
//   initialState = { todos: [] }
// }

window.addEventListener('load', app(loadState()))
