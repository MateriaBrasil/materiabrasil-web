import React, { Fragment } from 'react';
import Link from 'react-router-dom/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';

import Avatar from '../../imageUpload/Avatar';
import Album from './Album';
import Private from './Private';
import RecalculateTopsis from './recalculateTopsis';
import PropertyWithValue from '../../PropertyWithValue';
import MessageButton from '../../messages/new/Button';
import Supplier from '../../materials/info/Supplier';

export default props => infoProps => {
  const { currentUser } = props;
  const {
    id,
    firstName,
    lastName,
    albums,
    sharedAlbums,
    email,
    website,
  } = infoProps;
  const { city, state, country, company, workTitle, bio } = infoProps;
  const { imageUrl } = infoProps;
  const name = `${firstName} ${lastName}`;
  const editPath = currentUser && currentUser.id === id && '/profile/avatar';
  const isAdminProfile =
    currentUser && currentUser.admin && currentUser.id === id;
  const { suppliers } = currentUser || {};
  const suppliers_props = {
    supplierId: suppliers.length > 0 ? suppliers[0].id : {},
    supplierSlug: suppliers.length > 0 ? suppliers[0].slug : {},
    supplierName: suppliers.length > 0 ? suppliers[0].name : {},
    currentUser: currentUser,
    location: window.location,
  };

  return (
    <Fragment>
      <Helmet>
        <title>{name}</title>
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <Grid container spacing={32}>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <Avatar
            {...props}
            name={name}
            editPath={editPath}
            imageUrl={imageUrl}
          />
          <div style={{ marginTop: 30 }}>
            <Typography
              style={{ marginTop: 16, marginBottom: 16 }}
              variant="h4"
            >
              {name}
            </Typography>
            {editPath && (
              <Fragment>
                <Link
                  style={{ textDecoration: 'none', marginRight: 10 }}
                  to="/profile/edit"
                >
                  <Button variant="contained" color="primary">
                    Editar perfil
                  </Button>
                </Link>
                {currentUser.subscribed ? (
                  <Fragment>
                    <Private {...props} {...infoProps} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link
                      to={{
                        pathname: `/profile/premium`,
                        state: {
                          url: `/profile`,
                        },
                      }}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Private {...props} {...infoProps} />
                    </Link>
                  </Fragment>
                )}
              </Fragment>
            )}
            <div>
              {suppliers.length > 0 && (
                <Fragment>
                  <Typography
                    style={{ marginTop: 16, marginBottom: 5 }}
                    variant="h4"
                  >
                    Fornecedor
                  </Typography>
                  <Supplier {...suppliers_props} />
                </Fragment>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
          <Card>
            <CardContent>
              {currentUser &&
                currentUser.id === id && (
                  <PropertyWithValue
                    title="Email"
                    value={email}
                    style={{ marginTop: 16 }}
                  />
                )}
              <PropertyWithValue
                title="Website"
                value={website}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Bio"
                value={bio}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Organização"
                value={company}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Cargo"
                value={workTitle}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Cidade"
                value={city}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="Estado"
                value={state}
                style={{ marginTop: 16 }}
              />
              <PropertyWithValue
                title="País"
                value={country}
                style={{ marginTop: 16 }}
              />
              <MessageButton id={id} type="users" />
              {isAdminProfile && <RecalculateTopsis {...props} />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {map(albums, album => (
            <Album {...album} parentId={album.id} showDestroy={!!editPath} />
          ))}
        </Grid>
        <Typography style={{ marginTop: 16, marginBottom: 16 }} variant="h4">
          Álbuns compartilhados comigo
        </Typography>
        <Grid item xs={12}>
          {map(sharedAlbums, album => (
            <Album {...album} parentId={album.id} showDestroy={false} />
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};
