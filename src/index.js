import app from './app'

import { initialState } from './store'

window.addEventListener('load', app(initialState()))
