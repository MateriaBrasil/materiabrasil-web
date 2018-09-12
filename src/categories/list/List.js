import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import isEmpty from 'lodash/isEmpty'
import Button from '@material-ui/core/Button'

import fullName from 'categories/fullName'
import renderCategory from 'categories/renderCategory'
import handleChangeExpanded from 'categories/handleChangeExpanded'

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
    console.log(selectedCategories, this.props)

    return (
      <Fragment>
        {!isEmpty(selectedCategories) && (
          <div style={{ marginBottom: 30 }}>
            <Typography variant="subheading" style={{ marginBottom: 20 }}>
              Filtros selecionados
            </Typography>
            {selectedCategories.map(category => {
              console.log('category:',category)
              return (
                <Typography key={category.id} variant="body1">
                  {fullName(list, category, category.name)}
                </Typography>
              )
            })}
            <Button
              style={{ marginTop: 20 }}
              variant="outlined"
              onClick={filters.actions.reset}
            >
              Limpar filtros
            </Button>
          </div>
        )}
        {list.map(renderCategory(props))}
      </Fragment>
    )
  }
}
