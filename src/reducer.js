export default function reducer (currenState, action) {
  const state = Object.assign({}, currenState)

  switch (action.type) {
    case 'ADD_TODO':
      const id = new Date().getTime().toString(36)

      state.todos[id] = {
        completed: false,
        text: action.text
      }

      break

    case 'CLEAR_COMPLETED':
      for (let id in state.todos) {
        if (state.todos[id]. completed) {
          delete state.todos[id]
        }
      }

      break

    case 'EDIT':
      state.todos[action.id].edit = true

      break
    case 'DELETE_TODO':
      delete state.todos[action.id]

      break

    case 'TOGGLE_ALL':
      Object.keys(state.todos).forEach(id => {
        state.todos[id].completed = action.completed
      })

      break

    case 'TOGGLE_TODO':
      state.todos[action.id].completed = !state.todos[action.id].completed

      break

    default:
      state.showClearCompleted = Object.keys(state.todos).find(
        id => state.todos[id].completed === true
      ) !== undefined
  }

  return state
}
