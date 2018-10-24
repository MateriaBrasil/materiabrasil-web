import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import isEmpty from 'lodash/isEmpty'

import renderCategory from 'categories/renderCategory'
import SelectedCategories from './SelectedCategories'
import CleanButton from './CleanButton'
import Expander from '../Expander'

export default props => (
  <Expander
    {...props}
    render={controllerProps => {
      const { list, filters } = controllerProps
      const { selectedCategories } = filters

      return (
        <Fragment>
          {!isEmpty(selectedCategories) && (
            <div style={{ marginBottom: 30 }}>
              <Typography variant="subtitle1" style={{ marginBottom: 20 }}>
                Filtros selecionados
              </Typography>
              <SelectedCategories list={list} selected={selectedCategories} />
              <CleanButton handleClick={filters.actions.reset} />
            </div>
          )}
          {list.map(renderCategory(controllerProps))}
        </Fragment>
      )
    }}
  />
)
