import React from 'react'
import { Destroy } from 'croods'

import render from './render'
import parseDestroyResponse from './parseDestroyResponse'

export default props => (
  <Destroy
    id="currentUser"
    path="/auth/sign_out"
    name="signOut"
    parseDestroyResponse={parseDestroyResponse}
    render={render(props)}
  />
)
