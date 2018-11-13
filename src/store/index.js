import { loadState } from './localStorage'

export const initialState = () => {
  const state = loadState()

  state.filter = document.location.hash

  return state
}
