import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Video from '../Video'

const styles = theme => ({
  grid: {
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    padding: '100px 0',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 0',
    },
  },
})

export default withStyles(styles)(props => {
  return (
    <Grid
      container
      style={{
        backgroundImage: 'url("https://picsum.photos/g/1920/900/?random")',
        backgroundPosition: 'center',
        paddingTop: '35px',
        backgroundSize: 'cover',
      }}
    >
      <Grid
        className={props.classes.grid}
        xs={12}
        item
        style={{
          paddingTop: '5%',
          position: 'relative',
        }}
      >
        <Typography
          color="inherit"
          className="text"
          variant="display2"
          style={{
            width: '100%',
            position: 'absolute',
            top: '8%',
            color: '#fff',
            verticalAlign: 'middle',
            fontWeight: 500,
          }}
        >
          Como usar
        </Typography>
      </Grid>
      <Grid
        item
        sm={8}
        xs={12}
        md={6}
        className={props.classes.grid}
        style={{
          paddingTop: '35%',
          position: 'relative',
        }}
      >
        <Video />
      </Grid>
      <Grid item xs={12} className={props.classes.grid}>
        <img
          src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
          alt="placeholder image"
          style={{ maxWidth: '100%', padding: '3%' }}
        />
      </Grid>
    </Grid>
  )
})
