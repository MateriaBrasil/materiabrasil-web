import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import NewFavorite from '../../favorites/New'
import Reviews from './Reviews'
import TechnicalSpecification from '../list/TechnicalSpecification'
import TechnicalSpecificationUpload from './TechnicalSpecificationUpload'

export default props => {
  const { code, description, name, technicalSpecificationUrl, editable } = props

  return (
    <Grid item xs={12} lg={9} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <div style={{ float: 'right' }}>
            <NewFavorite {...props} />
            {technicalSpecificationUrl && <TechnicalSpecification {...props} />}
          </div>
          <Typography variant="display1">{name}</Typography>
          <Typography variant="caption" style={{ marginBottom: 16 }}>
            {code}
          </Typography>
          {editable && <TechnicalSpecificationUpload {...props} />}
          <Typography variant="subheading" style={{ marginBottom: 24 }}>
            {description}
          </Typography>
          <Reviews {...props} />
        </CardContent>
      </Card>
    </Grid>
  )
}
