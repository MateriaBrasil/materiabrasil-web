import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import queryString from 'query-string'

import SignUpLink from '../../auth/SignUpLink'
import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'
import Materials from './Materials'

class Info extends Component {
  componentDidUpdate(prevProps) {
    const { location, actions, current } = this.props
    const { id } = current
    const { search } = location
    const query = queryString.parse(search)
    const { reload } = query

    if (reload) {
      const { fetchInfo } = actions
      fetchInfo(id)
    }
  }
  render() {
    const { current, currentUser, location } = this.props
    const { pathname } = location
    const { id, name, description, email, phone, reach, imageUrl } = current
    const { userId, materials } = current

    const editPath =
      currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

    return (
      <Grid container spacing={32}>
        <Grid item xs={12} lg={4}>
          <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
          <Typography
            variant="display1"
            style={{ marginTop: 16, marginBottom: 16 }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <PropertyWithValue
                title="Descrição"
                value={description}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Alcance"
                value={translateReach(reach)}
                style={{ marginTop: 16 }}
              />
              {currentUser ? (
                <Fragment>
                  <PropertyWithValue
                    title="Email"
                    value={email}
                    style={{ marginTop: 16 }}
                  />
                  <PropertyWithValue
                    title="Telefone"
                    value={phone}
                    style={{ marginTop: 16 }}
                  />
                </Fragment>
              ) : (
                <div style={{ marginTop: 16 }}>
                  <SignUpLink
                    pathname={pathname}
                    text="para ver o contato do fornecedor."
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {materials && <Materials list={materials} />}
        </Grid>
        <Addresses id={id} supplier={current} {...this.props} />
      </Grid>
    )
  }
}

export default Info;
