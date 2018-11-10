import Component from './Component'

export default class Filters extends Component {
  constructor (dispatch, element) {
    super(dispatch, element)

    const all = element.children[0].firstChild
    const active = element.children[1].firstChild
    const completed = element.children[2].firstChild

    all.addEventListener('click', this.applyFilter('all').bind(this))
    active.addEventListener('click', this.applyFilter('active').bind(this))
    completed.addEventListener('click', this.applyFilter('completed').bind(this))
  }

  applyFilter (filter) {
    return function (event) {
      console.log(filter)
    }
  }
}
