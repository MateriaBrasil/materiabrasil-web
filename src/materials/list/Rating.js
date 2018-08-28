import React, { Fragment } from 'react'
import Star from '@material-ui/icons/Star'
import Typography from '@material-ui/core/Typography'

export default ({ averageRating }) =>
  averageRating ? (
    <Fragment>
      <Star
        color="inherit"
        style={{ verticalAlign: 'middle', marginRight: 8 }}
      />
      <Typography
        variant="body1"
        color="inherit"
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        {averageRating}
      </Typography>
    </Fragment>
  ) : null
