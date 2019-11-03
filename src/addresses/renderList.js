import React, { Fragment } from 'react';

import map from 'lodash/map';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import Card from './Card';

export default props => list => {
  const { phone } = props.current;
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
                phoneNumber,
                city,
                state,
                country,
              }) => {
                const fullAddress = `${streetAddress}${
                  zipCode ? ` - ${zipCode}` : ''
                }`;
                let fullCity = `${city}, ${state}, ${country}`;

                return (
                  <div>
                    <ListItem key={id}>
                      <Avatar>
                        {addressType === 'manufacture' ? (
                          <BuildIcon />
                        ) : (
                          <EmailIcon />
                        )}
                      </Avatar>
                      <ListItemText
                        primary={
                          fullAddress.includes('null') ? null : fullAddress
                        }
                        secondary={
                          fullCity.includes('null')
                            ? `${city}, ${state}`
                            : fullCity
                        }
                      />
                    </ListItem>

                    {phoneNumber ? (
                      <ListItem>
                        <Avatar>
                          <PhoneIcon />
                        </Avatar>
                        <ListItemText primary={phoneNumber} />
                      </ListItem>
                    ) : phone ? (
                      <ListItem>
                        <Avatar>
                          <PhoneIcon />
                        </Avatar>
                        <ListItemText primary={phone} />
                      </ListItem>
                    ) : null}
                  </div>
                );
              },
            )}
          </List>
        </Card>
      ) : null}
    </Fragment>
  );
};
