import Component from './Component'

export default class Filters extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    const all = element.children[0]
    const active = element.children[1]
    const completed = element.children[2]

    this.all = all
    this.active = active
    this.completed = completed

    all.addEventListener('click', function () {
      dispatch({
        type: 'APPLY_FILTER',
        filter: ''
      })
    })

    active.addEventListener('click', function () {
      dispatch({
        type: 'APPLY_FILTER',
        filter: '#/active'
      })
    })

    completed.addEventListener('click', function () {
      dispatch({
        type: 'APPLY_FILTER',
        filter: '#/completed'
      })
    })
  }

  render (state) {
    if (state.filter !== this.filter) {
      this.filter = state.filter

      switch (this.filter) {
        case '':
          this.all.children[0].classList.add('selected')
          this.active.children[0].classList.remove('selected')
          this.completed.children[0].classList.remove('selected')
        break
        case '#/active':
          this.all.children[0].classList.remove('selected')
          this.active.children[0].classList.add('selected')
          this.completed.children[0].classList.remove('selected')
        break
        case '#/completed':
          this.all.children[0].classList.remove('selected')
          this.active.children[0].classList.remove('selected')
          this.completed.children[0].classList.add('selected')
        break
      }
    }

  }
}
