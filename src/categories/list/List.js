import { Component } from 'react'

import renderCategory from 'categories/renderCategory'
import handleChangeExpanded from 'categories/handleChangeExpanded'

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = { expandedCategories: [] }
    this.onChangeExpanded = handleChangeExpanded.bind(this)
  }

  handleSelect(category) {
    const { history } = this.props
    return () => {
      history.push({ search: `selected=${category.id}` })
    }
  }

  render() {
    const props = {
      ...this.props,
      ...this.state,
      onChangeExpanded: this.onChangeExpanded,
    }

    const renderChild = category =>
      renderCategory({ ...props, rootCategory: category }, this.handleSelect)(
        category,
      )

    return this.props.list.map(renderChild)
  }
}
