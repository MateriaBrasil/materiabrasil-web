import React from 'react';
import Link from 'react-router-dom/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '../../materials/list/Card';

export default props => {
  const { current, currentUser } = props;
  const { userId, materials, id, questionnairesCompleted } = current;
  const isOwner = currentUser && currentUser.id === userId;

  return (
    <Grid item xs={12}>
      {(isOwner || materials) && (
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ display: 'inline-block', marginBottom: 32 }}
        >
          Materiais
        </Typography>
      )}
      {isOwner && questionnairesCompleted ? (
        <Link
          to={`/suppliers/${id}/materials/new`}
          style={{
            display: 'inline-block',
            float: 'right',
            textDecoration: 'none',
          }}
        >
          <Button variant="contained" color="primary">
            Cadastrar material
          </Button>
        </Link>
      ) : isOwner && !questionnairesCompleted ? (
        <a
          style={{
            display: 'inline-block',
            float: 'right',
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            className="btn-disabled"
            onClick={e => {
              e.preventDefault;
              props.snackbar.actions.setMessage(
                'Você deve responder os questionários do fornecedor antes de cadastrar um material',
              );
            }}
          >
            Cadastrar material
          </Button>
        </a>
      ) : null}

      {materials && (
        <Grid container spacing={8} cellheight={360}>
          {materials.map(
            (material, index) =>
              (isOwner || material.published) && (
                <Card key={index} ignoreHighlights material={material} />
              ),
          )}
        </Grid>
      )}
    </Grid>
  );
};
