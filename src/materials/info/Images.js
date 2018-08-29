import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import Avatar from '../../imageUpload/Avatar'

export default ({ id, name, listImageUrl, highlightImageUrl }) => {
  return (
    <Grid item xs={12} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <Typography variant="display1" style={{ marginBottom: 24 }}>
            Imagens
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} lg={4}>
              <Typography variant="headline" style={{ marginBottom: 16 }}>
                Imagem para a lista
              </Typography>
              <Avatar
                name={name}
                editPath={`/${id}/listImage`}
                imageUrl={listImageUrl}
                width={720}
                height={480}
                preserveRatio
              />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Typography variant="headline" style={{ marginBottom: 16 }}>
                Imagem para os destaques
              </Typography>
              <Avatar
                name={name}
                editPath={`/${id}/highlightImage`}
                imageUrl={highlightImageUrl}
                width={1920}
                height={720}
                preserveRatio
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
