import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'
import List from '../../favorites/List'

export default ({ name, ...props }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Link
        to={`/albums/${props.id}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ marginBottom: 16 }}
        >
          {name}
        </Typography>
      </Link>
      <List {...props} />
    </div>
  )
}
