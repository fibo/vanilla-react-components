export default function reducer (currenState, action) {
  const state = Object.assign({}, currenState)

  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({
        completed: false,
        text: action.text
      })

      break

    case 'TOGGLE_TODO':
      state.todos[action.index].completed = !state.todos[action.index].completed

      break
  }

  return state
}
