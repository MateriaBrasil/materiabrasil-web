import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import get from 'lodash/get';
import ReactGA from 'react-ga';
export default props => {
  const { id, currentUser, supplier, supplierSlug } = props;
  let editable;
  if (props.current) {
    if (
      currentUser.admin === true ||
      props.current.supplierId === currentUser.suppliers[0].id
    ) {
      editable = true;
    }
  } else {
    editable =
      get(currentUser, 'admin', false) ||
      get(supplier, 'userId', 'supplierNoExist').toString() ===
        get(currentUser, 'id', 'currentUserNoExist').toString();
  }

  const gaFornecedorEvent = function() {
    if (!editable && currentUser && props.current) {
      ReactGA.event({
        category: 'Ver Questionário Fornecedor',
        action: `${props.current.supplierName} ${props.current.name}`,
        label: props.current.name,
      });
    } else if (!editable && currentUser && supplier) {
      ReactGA.event({
        category: 'Ver Questionário Fornecedor',
        action: `${supplier.name}`,
      });
    }
  };

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
