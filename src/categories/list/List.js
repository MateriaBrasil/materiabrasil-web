import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import isEmpty from 'lodash/isEmpty'

import renderCategory from 'categories/renderCategory'
import handleChangeExpanded from 'categories/handleChangeExpanded'
import SelectedCategories from './SelectedCategories'
import CleanButton from './CleanButton'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { expandedCategories: [] }
    this.onChangeExpanded = handleChangeExpanded.bind(this)
  }

  render() {
    const { list, filters } = this.props
    const { selectedCategories } = filters

    const props = {
      ...this.props,
      ...this.state,
      onChangeExpanded: this.onChangeExpanded,
    }
    return (
      <Fragment>
        {!isEmpty(selectedCategories) && (
          <div style={{ marginBottom: 30 }}>
            <Typography variant="subheading" style={{ marginBottom: 20 }}>
              Filtros selecionados
            </Typography>
            <SelectedCategories list={list} selected={selectedCategories} />
            <CleanButton handleClick={filters.actions.reset} />
          </div>
        )}
        {list.map(renderCategory(props))}
      </Fragment>
    )
  }
}
