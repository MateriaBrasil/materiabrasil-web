import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import { Edit } from 'croods'

export default props => {
  const images =
    props.coverImageUrl && props.highlightImageUrl && props.listImageUrl

  const generalInfo =
    props.name &&
    props.code &&
    props.description &&
    props.availability &&
    props.unitOfSale &&
    props.averagePrice &&
    props.maximumPurchaseQuantity &&
    props.minimumPurchaseQuantity &&
    props.ncmCode &&
    props.shCode &&
    props.certifications &&
    props.prizes &&
    props.density &&
    props.dimensions

  const publishable =
    images && generalInfo && props.category && props.questionnairesCompleted

  let notCompletedMessage = 'Você precisa preencher '

  if (!images) {
    notCompletedMessage += 'as imagens, '
  }

  if (!generalInfo) {
    notCompletedMessage += 'as informações gerais, '
  }

  if (!props.category) {
    notCompletedMessage += 'as informações técnicas, '
  }

  if (!props.questionnairesCompleted) {
    notCompletedMessage += 'o questionário, '
  }

  notCompletedMessage += 'para poder tornar seu material visível.'

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
              checked={info.published}
              onChange={() => {
                update({
                  id: props.match.params.id,
                  published: !info.published,
                })
              }}
            />
          )}
          renderUpdated={() => null}
        />
      </Typography>
    </Fragment>
  )
}
