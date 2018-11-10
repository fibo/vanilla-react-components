const defaultState = {
  filter: null,
  todos: []
}

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('todos')
    if (serializedState === null) {
      return defaultState
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return defaultState
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('todos', serializedState)
  } catch (err) {
    // Ignore
  }
}
