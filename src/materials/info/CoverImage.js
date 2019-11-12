import React from 'react';
import Grid from '@material-ui/core/Grid';

import Avatar from '../../imageUpload/Avatar';

export default ({ id, slug, name, coverImageUrl, editable }) => {
  const editPath = editable && `/materials/${slug}/coverImage`;

  return (
    <Grid item xs={12} style={{ marginBottom: 16 }}>
      <Avatar
        name={name}
        editPath={editPath}
        imageUrl={coverImageUrl}
        width={1920}
        height={640}
        preserveRatio
      />
    </Grid>
  );
};
