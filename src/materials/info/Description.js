import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import { Edit } from 'croods'

import NewFavorite from '../../favorites/New'
import Reviews from './Reviews'
import TechnicalSpecification from '../list/TechnicalSpecification'
import TechnicalSpecificationUpload from './TechnicalSpecificationUpload'
import CertificationsUpload from './CertificationsUpload'
import CertificationsIcon from './CertificationsIcon'
import EditButton from './EditButton'
import Supplier from './Supplier'

export default props => {
  const { code, description, name, technicalSpecificationUrl } = props
  const { certificationsUrl, editable } = props
  const notCompleted = true

  return (
    <Card style={{ marginBottom: 16 }}>
      <CardContent>
        <div style={{ float: 'right' }}>
          <NewFavorite {...props} />
          {technicalSpecificationUrl && <TechnicalSpecification {...props} />}
          {certificationsUrl && <CertificationsIcon {...props} />}
        </div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="caption" style={{ marginBottom: 16 }}>
          {code}
        </Typography>
        <Supplier {...props} />
        {editable && (
          <Fragment>
            {notCompleted &&
              'Você precisa preencher as informações gerais, as informações técnicas e responder ao questionário para tornar seu material visível.'}
            <Edit
              id={props.match.params.id}
              name="materials"
              render={({ info, update, updating, error }) => (
                <Switch
                  disabled={notCompleted}
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
            <EditButton {...props} label="Editar informações gerais" />
            <EditButton
              {...props}
              path="categories"
              label="Editar informações técnicas"
            />
            <TechnicalSpecificationUpload {...props} />
            <CertificationsUpload {...props} />
          </Fragment>
        )}
        <EditButton
          {...props}
          path="questionnaires"
          label={editable ? 'Responder questionário' : 'Ver questionário'}
        />
        <Typography variant="subtitle1" style={{ marginBottom: 24 }}>
          {description}
        </Typography>
        <Reviews {...props} />
      </CardContent>
    </Card>
  )
}
