import app from './app'

const initialState = {
  todos: [
    { text: 'remember the milk' }
  ]
}

window.addEventListener('load', app(initialState))
