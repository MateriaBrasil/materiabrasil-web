import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import get from 'lodash/get';
import ReactGA from 'react-ga';
export default props => {
  const { id, currentUser, supplier, supplierSlug } = props;

  const gaFornecedorEvent = function() {
    alert();
    console.log(props);

    ReactGA.event({
      category: 'Ver Questionário Fornecedor',
      action: 'Click',
      label: `Fornecedor: ${props.current.supplierName} Material: ${
        props.current.name
      }`,
    });
  };

  const editable =
    get(currentUser, 'admin', false) ||
    get(supplier, 'userId', 'supplierNoExist').toString() ===
      get(currentUser, 'id', 'currentUserNoExist').toString();

  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/suppliers/${supplierSlug}/questionnaires`}
    >
      <Button
        onClick={gaFornecedorEvent}
        variant="contained"
        color="primary"
        style={{ marginTop: 10, fontSize: 12 }}
      >
        {editable
          ? 'Responder questionários do fornecedor'
          : 'Ver questionários do fornecedor'}
      </Button>
    </Link>
  );
};
