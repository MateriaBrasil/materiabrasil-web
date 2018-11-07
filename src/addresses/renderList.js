import React, { Fragment } from 'react'

import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'

import Card from './Card'

export default props => list => {
  return (
    <Fragment>
      {(list && list.length) > 0 ? (
        <Card title="Endereço">
          <List>
            {map(
              list,
              ({
                id,
                addressType,
                streetAddress,
                zipCode,
                city,
                state,
                country,
              }) => {
                const fullAddress = `${streetAddress}${
                  zipCode ? ` - ${zipCode}` : ''
                }`
                const fullCity = `${city}, ${state}, ${country}`

                return (
                  <ListItem key={id}>
                    <Avatar>
                      {addressType === 'manufacture' ? (
                        <BuildIcon />
                      ) : (
                        <EmailIcon />
                      )}
                    </Avatar>
                    <ListItemText primary={fullAddress} secondary={fullCity} />
                  </ListItem>
                )
              },
            )}
          </List>
        </Card>
      ) : null}
    </Fragment>
  )
}
