import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import SectionTitle from 'homepage/SectionTitle'
import Section from '../Section'
import Members from '../Members'

import membersList from './membersList'

const polygon = 'polygon(0 0.5%, 100% 0, 100% 98%, 0 100%)'
const largePolygon = 'polygon(0 4%, 100% 0, 100% 92%, 0 100%)'

const styles = theme => ({
  section: {
    WebkitClipPath: polygon,
    clipPath: polygon,
    [theme.breakpoints.up('lg')]: {
      WebkitClipPath: largePolygon,
      clipPath: largePolygon,
    },
  },
})

export default withStyles(styles)(({ classes, ...props }) => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-3.png">Equipe</SectionTitle>
    <Section
      id="crew"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-2.jpg')"
      className={classes.section}
      {...props}
    >
      <Members list={membersList} />
    </Section>
  </div>
))
