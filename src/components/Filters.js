import Component from './Component'

export default class Filters extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    const all = this.all = element.children[0]
    const active = this.active = element.children[1]
    const completed = this.completed = element.children[2]

    all.addEventListener('click', this.onclickAll.bind(this))
    active.addEventListener('click', this.onclickActive.bind(this))
    completed.addEventListener('click', this.onclickCompleted.bind(this))
  }

  onclickAll () {
    this.dispatch({
      type: 'APPLY_FILTER',
      filter: ''
    })
  }

  onclickActive () {
    this.dispatch({
      type: 'APPLY_FILTER',
      filter: '#/active'
    })
  }

  onclickCompleted () {
    this.dispatch({
      type: 'APPLY_FILTER',
      filter: '#/completed'
    })
  }

  render (state) {
    const {
      all,
      active,
      completed
    } = this

    if (state.filter !== this.filter) {
      this.filter = state.filter

      switch (this.filter) {
        case '':
          all.children[0].classList.add('selected')
          active.children[0].classList.remove('selected')
          completed.children[0].classList.remove('selected')
        break
        case '#/active':
          all.children[0].classList.remove('selected')
          active.children[0].classList.add('selected')
          completed.children[0].classList.remove('selected')
        break
        case '#/completed':
          all.children[0].classList.remove('selected')
          active.children[0].classList.remove('selected')
          completed.children[0].classList.add('selected')
        break
      }
    }

  }
}
