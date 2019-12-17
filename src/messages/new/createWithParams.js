import ReactGA from 'react-ga';
import { api } from '../../services/axios';

export default (create, id) => ({ toType, text }) => {
  create({ toId: parseInt(id, 10), toType, text });

  if (toType === 'Supplier') {
    api.get(`/suppliers/${id}`).then(function(response) {
      ReactGA.event({
        category: 'Formulário Fornecedor',
        action: 'Submit',
        label: response.data.name,
      });
    });
  }
};
