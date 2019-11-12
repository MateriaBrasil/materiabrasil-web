import React from 'react';
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default props => {
  const { id, label, headers, baseUrl, history } = props;

  const destroy = async function() {
    if (window.confirm('Tem certeza que deseja deletar esse Material?')) {
      try {
        await axios.delete(`${baseUrl}/materials/${id}`, {
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
      color="primary"
      style={{ marginBottom: 24 }}
    >
      {label}
    </Button>
  );
};
