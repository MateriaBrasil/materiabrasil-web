import { Component } from 'react'
import handleChangeExpanded from 'categories/handleChangeExpanded'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { expandedCategories: [] }
    this.onChangeExpanded = handleChangeExpanded.bind(this)
  }

  render() {
    const props = {
      ...this.props,
      ...this.state,
      onChangeExpanded: this.onChangeExpanded,
    }
    return this.props.render(props)
  }
}
