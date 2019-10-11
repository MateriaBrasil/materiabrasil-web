import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ title, value, link, ...props }) =>
  value ? (
    <div {...props}>
      <Typography variant="h6" style={{ display: 'inline-block' }}>
        {title}:
      </Typography>{' '}
      {!link ? (
        <Typography variant="subtitle1" style={{ display: 'inline-block' }}>
          {value}
        </Typography>
      ) : (
        <a target="_blank" href={value} style={external_link}>
          {value}
        </a>
      )}
    </div>
  ) : null

const external_link = {
  color: 'rgba(0, 0, 0, 0.87)',
  fontSize: '1rem',
  textDecoration: 'none',
  fontFamily: 'Open Sans',
  fontWeight: 500,
  lineHeight: 1.6,
}
