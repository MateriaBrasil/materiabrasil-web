import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Stepper from './Stepper'
import Grid from '../InstitutionalPagesGrid'
import Video from '../Video'
import NavBar from '../navBar/NavBar'
import Colors from '../Colors'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage="true" />
    <Stepper {...props} />
  </Fragment>
)
