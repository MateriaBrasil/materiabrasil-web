import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default redirectUrl => () => <Redirect to={redirectUrl} />
