import { api } from '../../services/axios';

export default ({ create, aboutId, aboutType, optionId, questionId }) => () => {
  function findAboutId() {
    if (String(window.location.href).indexOf('materials') > -1) {
      api.get(`materials/${aboutId}`).then(function(response) {
        const newAboutId = Number(response.data.id);

        create({
          aboutId: newAboutId,
          aboutType,
          optionId,
          questionId,
        });
      });
    } else if (String(window.location.href).indexOf('supplier') > -1) {
      api.get(`suppliers/${aboutId}`).then(function(response) {
        const newAboutId = Number(response.data.id);

        create({
          aboutId: newAboutId,
          aboutType,
          optionId,
          questionId,
        });
      });
    }
  }

  findAboutId();
};
