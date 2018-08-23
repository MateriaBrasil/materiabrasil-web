import React , { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'

export default props => list => {
  return (
  <Card>
    <CardContent>
      <Typography
        variant="headline"
        color="textSecondary"
        style={{ marginBottom: 16 }}
      >
        Endereços
      </Typography>
      <Fragment>
        <List>
          {map(
            list,
            ({ id, addressType, streetAddress, zipCode, city, state, country }) => {
              const fullAddress = `${streetAddress}${zipCode ? ` - ${zipCode}` : ''}`
              const fullCity = `${city}, ${state}, ${country}`

              return (
                <ListItem key={id} button>
                  <Avatar>
                    {addressType === 'manufacture' ? <BuildIcon /> : <EmailIcon />}
                  </Avatar>
                  <ListItemText primary={fullAddress} secondary={fullCity} />
                </ListItem>
              )
            },
          )}
        </List>
      </Fragment>
    </CardContent>
  </Card>

)
}
