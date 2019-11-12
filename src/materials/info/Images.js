import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Image from './Image';

export default ({ id, slug, name, listImageUrl, highlightImageUrl }) => {
  return (
    <Grid item xs={12} style={{ marginBottom: 16 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" style={{ marginBottom: 24 }}>
            Imagens
          </Typography>
          <Grid container spacing={24}>
            <Image
              width={720}
              height={540}
              editPath={`/materials/${slug}/listImage`}
              name={name}
              lg={4}
              imageUrl={listImageUrl}
              text="Imagem para a lista"
            />
            <Image
              editPath={`/materials/${slug}/highlightImage`}
              name={name}
              lg={8}
              imageUrl={highlightImageUrl}
              text="Imagem para os destaques"
              width={1920}
              height={720}
            />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
