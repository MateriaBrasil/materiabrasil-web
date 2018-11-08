import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import map from 'lodash/map'

export default ({ list, title }) => (
  <Fragment>
    <Typography
      variant="h4"
      style={{
        fontWeight: 600,
        textAlign: 'center',
        padding: '20px 0',
      }}
    >
      {title}
    </Typography>
    {map(list, ({ id, question }) => {
      return (
        <Typography key={id} style={{ padding: '10px 20px' }}>
          {question}
        </Typography>
      )
    })}
  </Fragment>
)
