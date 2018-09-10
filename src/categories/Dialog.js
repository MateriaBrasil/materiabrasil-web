import React, { Component } from 'react'
import { List } from 'croods'

import Dialog from 'materials/Dialog'
import renderList from './renderList'
import handleChangeExpanded from './handleChangeExpanded'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = { expandedCategories: [] }
    this.onChangeExpanded = handleChangeExpanded.bind(this)
  }

  render() {
    const props = {
      onChangeExpanded: this.onChangeExpanded,
      ...this.state,
      ...this.props,
    }

    return (
      <Dialog {...props} title="Editar informações técnicas">
        <List name="categories" render={renderList(props)} />
      </Dialog>
    )
  }
}
