function reducer (currenState, action) {
  var state = Object.assign({}, currenState)

  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({
        done: false,
        what: action.what
      })

      break

    case 'TOGGLE_TODO':
      state.todos[action.index].done = !state.todos[action.index].done

      break
  }

  return state
}

module.exports = reducer
