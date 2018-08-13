import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'react-router-dom/Link'

export default props => ({ info, update, updating, error }, editProps) => {
  const { name } = info

  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={4}>
        <Typography variant="display1" style={{ marginBottom: 16 }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Card>
          <CardContent>
            <Link to="avatar">
              <CardMedia
                style={{
                  width: 200,
                  height: 200,
                  display: 'inline-block',
                  marginRight: 16,
                  borderRadius: 2,
                }}
                image={'/images/avatar.png'}
                title="Clique para editar"
              />
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}