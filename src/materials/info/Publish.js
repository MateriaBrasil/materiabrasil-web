import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { Edit } from 'croods';

export default props => {
  const has_img = props.listImageUrl;

  console.log('----------');
  console.log(props.info);
  console.log('----------');

  let generalInfo;
  if (
    props.name !== null ||
    props.name !== false ||
    props.code !== null ||
    props.code !== false ||
    props.description !== null ||
    props.description !== false ||
    props.average_price !== null ||
    props.average_price !== false
  ) {
    generalInfo = true;
  } else {
    generalInfo = false;
  }

  const publishable =
    has_img && generalInfo && props.category && props.questionnairesCompleted;

  let notCompletedMessage = 'Você precisa preencher ';

  if (!has_img) {
    notCompletedMessage += 'as imagens, ';
  }

  if (!generalInfo) {
    notCompletedMessage += 'as informações gerais, ';
  }

  if (!props.category && !props.categoryFilled[props.match.params.id]) {
    notCompletedMessage += 'as informações técnicas, ';
  }

  if (!props.questionnairesCompleted) {
    notCompletedMessage += 'o questionário, ';
  }

  notCompletedMessage += 'para poder tornar seu material visível.';

  return (
    <Fragment>
      {!publishable && (
        <Typography variant="body1" style={{ marginBottom: 5 }}>
          {notCompletedMessage}
        </Typography>
      )}
      <Typography variant="subtitle1" style={{ marginBottom: 5 }}>
        Publicar Material
        <Edit
          id={props.match.params.id}
          name="publishMaterials"
          path={`/materials/${props.match.params.id}`}
          render={({ info, update, updating, error }) => (
            <Switch
              disabled={!publishable}
              checked={info.prePublished}
              onChange={() => {
                update({
                  id: props.match.params.id,
                  prePublished: !info.prePublished,
                });
              }}
            />
          )}
          renderUpdated={() => null}
        />
      </Typography>
    </Fragment>
  );
};
