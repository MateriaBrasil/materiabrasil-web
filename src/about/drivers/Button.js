import React from 'react'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'

export default props => (
  <Link to={`/materials`} style={{ textDecoration: 'none' }}>
    <Button
      variant="contained"
      color={props.color}
      style={{
        borderRadius: 7,
        textTransform: 'lowercase',
        fontSize: 30,
        margin: 5,
      }}
    >
      {props.text}
    </Button>
  </Link>
)
