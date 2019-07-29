import Button from '@material-ui/core/Button'
import React from 'react'

import Loading from '../../../Loading'
import Error from '../../../Error'

export const callCreate = create => () => create()

export default ({ create, creating, error }) =>
  (creating && <Loading style={{ marginRight: '15px' }} />) || (
    <React.Fragment>
      <Button onClick={callCreate(create)} color="primary">
        Confirmar
      </Button>
      {!!error && <Error>{error}</Error>}
    </React.Fragment>
  )
