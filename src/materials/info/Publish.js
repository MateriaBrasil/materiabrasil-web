import React from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { Edit } from 'croods';

export default props => {
  const has_img = props.current.listImageUrl;

  function handlePublishMessage() {
    if (props.info.published === true) {
      return 'Material Publicado';
    } else if (
      props.info.prePublished === true &&
      props.info.published === false
    ) {
      return 'Material aguardando aprovação';
    } else {
      return 'Enviar material para aprovação';
    }
  }

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
    has_img &&
    generalInfo &&
    props.current.category &&
    props.current.questionnairesCompleted;

  let notCompletedMessage = 'Você precisa preencher ';

  if (!has_img) {
    notCompletedMessage += 'as imagens, ';
  }

  if (!generalInfo) {
    notCompletedMessage += 'as informações gerais, ';
  }

  if (!props.current.category && !props.current.categories[props.current.id]) {
    notCompletedMessage += 'as informações técnicas, ';
  }

  if (!props.current.questionnairesCompleted) {
    notCompletedMessage += 'o questionário, ';
  }

  notCompletedMessage += 'para poder tornar seu material visível.';

  return (
    <div style={{ width: '100%' }}>
      {!publishable && (
        <Typography variant="body1" style={{ marginBottom: 5 }}>
          {notCompletedMessage}
        </Typography>
      )}
      <Typography variant="subtitle1" style={{ marginBottom: 5 }}>
        {handlePublishMessage()}
        <Edit
          id={props.match.params.id}
          name="publishMaterials"
          path={`/materials/${props.match.params.id}`}
          render={({ info, update, updating, error }) => (
            <Switch
              disabled={!publishable}
              checked={info.prePublished || info.published}
              onChange={() => {
                update({
                  id: props.match.params.id,
                  prePublished: !info.prePublished,
                });
                window.location.reload();
              }}
            />
          )}
          renderUpdated={() => null}
        />
      </Typography>
    </div>
  );
};
