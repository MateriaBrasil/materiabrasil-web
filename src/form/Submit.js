import React from 'react'
import Button from '@material-ui/core/Button'

export default ({ disabled, callToAction, containerStyle }) => (
  <div style={{ textAlign: 'right', ...containerStyle }}>
    <Button variant="raised" color="primary" type="submit" disabled={disabled}>
      {callToAction}
    </Button>
  </div>
)
