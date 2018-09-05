import { Component } from 'react'

import renderCategory from 'categories/renderCategory'

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(category) {
    const { history } = this.props
    return () => {
      history.push({ search: `selected=${category.id}` })
    }
  }

  render() {
    const renderChild = renderCategory(this.props, this.handleSelect)
    return this.props.list.map(renderChild)
  }
}
