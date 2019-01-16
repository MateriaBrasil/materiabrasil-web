import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'

export default ({ messageToken, offer: { valueToPay }, total }) => {
  return (
    <Fragment>
      <Button
        disabled={total < valueToPay}
        location={`/confirmar/${messageToken}`}
        name="Continue agora!"
        style={{ marginTop: 20 }}
      />
    </Fragment>
  )
}
