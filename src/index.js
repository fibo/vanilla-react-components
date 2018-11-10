import app from './app'

import { loadState } from './localStorage'

const state = loadState()

window.addEventListener('load', app(loadState()))
