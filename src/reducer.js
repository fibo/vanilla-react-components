export default function reducer (currenState, action) {
  const state = Object.assign({}, currenState)

  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({
        completed: false,
        text: action.text
      })

      break

    case 'DELETE_TODO':
      state.todos = state.todos.splice(action.index, 1)

      break

    case 'TOGGLE_ALL':
      for (let index in state.todos) {
        console.log(index, action.completed)
        state.todos[index].completed = action.completed
      }

      break

    case 'TOGGLE_TODO':
      state.todos[action.index].completed = !state.todos[action.index].completed

      break
  }

  return state
}
