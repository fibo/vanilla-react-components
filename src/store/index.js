import { loadState } from './localStorage'

export const initialState = () => {
  const state = loadState()

  state.editingId = null
  state.filter = document.location.hash

  return state
}
