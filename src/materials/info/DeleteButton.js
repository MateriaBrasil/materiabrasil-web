import React from 'react';
import Button from '@material-ui/core/Button';

import { api } from '../../services/axios';

export default props => {
  const { id, label, headers, history } = props;

  const destroy = async function() {
    if (window.confirm('Tem certeza que deseja deletar esse Material?')) {
      try {
        await api.delete(`/materials/${id}`, {
          headers: headers(),
        });
      } catch (err) {
        console.log(err);
      }

      props.snackbar.actions.setMessage('Material deletado com sucesso!');
      history.push('/');
    }
  };

  return (
    <Button
      onClick={destroy}
      variant="contained"
      style={{ backgroundColor: '#cb1e4b' }}
      // style={{ marginBottom: 24 }}
    >
      {label}
    </Button>
  );
};
