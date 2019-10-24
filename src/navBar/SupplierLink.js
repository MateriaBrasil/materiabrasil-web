import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core';
import Link from './Link';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default props => {
  const { suppliers } = props;

  toast.configure();
  const notify = () =>
    toast.warn(
      'Você deve responder os questionários do fornecedor para poder cadastrar um Material',
      {
        hideProgressBar: true,
        autoClose: 3000,
        position: 'bottom-right',
      },
    );

  return (
    <Fragment>
      {suppliers &&
      suppliers.length > 0 &&
      suppliers[0].questionnairesCompleted === false ? (
        <a
          className="navbar-link"
          style={{ cursor: 'pointer' }}
          onClick={notify}
        >
          <Typography
            variant="subtitle1"
            color="inherit"
            style={{ display: 'inline-block', alignSelf: 'center' }}
          >
            Cadastrar Material
          </Typography>
        </a>
      ) : suppliers && suppliers.length > 0 ? (
        <Link
          to={`/suppliers/${suppliers[0].id}/materials/new`}
          text="Cadastrar Material"
          {...props}
        />
      ) : (
        <Link to={`/suppliers/new`} text="Cadastrar fornecedor" {...props} />
      )}
    </Fragment>
  );
};
