import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Star from '@material-ui/icons/Star'
import CloudDownload from '@material-ui/icons/CloudDownload'
import Typography from '@material-ui/core/Typography'

export default ({ averageRating, cardAction, technicalSpecificationUrl }) => (
  <CardActions style={{ marginLeft: 6 }}>
    {averageRating && (
      <div style={{ marginRight: 36 }}>
        <Star
          color="action"
          style={{ verticalAlign: 'middle', marginRight: 8 }}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
          {averageRating}
        </Typography>
      </div>
    )}
    <a
      href={technicalSpecificationUrl}
      target="_blank"
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <CloudDownload
        color="action"
        style={{ verticalAlign: 'middle', marginRight: 8 }}
      />
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      >
        Ficha técnica
      </Typography>
    </a>
    {cardAction}
  </CardActions>
)
