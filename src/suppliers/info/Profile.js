import React from 'react';
import Grid from '@material-ui/core/Grid';
import get from 'lodash/get';
import Avatar from '../../imageUpload/Avatar';
import Name from './Name';
import EditProfile from './EditProfile';
import AnswerQuestionnaire from './AnswerQuestionnaire';

export default props => {
  const { current, currentUser, supplierSlug } = props;
  const { userId, id, name, imageUrl } = current;
  let editPath = '';
  if (
    get(currentUser, 'admin', false) ||
    get(currentUser, 'id', 0) === userId
  ) {
    editPath = `/suppliers/${id}/avatar`;
  }

  console.log(props);

  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
      <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
      <Name text={name} />
      <EditProfile currentUser={currentUser} supplier={current} />
      <AnswerQuestionnaire
        currentUser={currentUser}
        supplier={current}
        id={id}
        supplierSlug={supplierSlug}
      />
    </Grid>
  );
};
