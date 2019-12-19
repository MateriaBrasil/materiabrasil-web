import React from 'react';
import { ButtonsContainer } from './DriversStyles';
import { Link } from 'react-router-dom';

export default function(props) {
  const { current } = props;
  console.log(props);
  const material_questionnaire_path = `/materials/${
    current.slug
  }/questionnaires`;
  const supplier_questionnaire_path = `/suppliers/${
    current.supplierSlug
  }/questionnaires`;

  return (
    <ButtonsContainer>
      <Link to={supplier_questionnaire_path}>questionario fornecedor</Link>
      {/* <AnswerQuestionnaire
        currentUser={currentUser ? currentUser : ''}
        {...props}
        supplier={supplier ? supplier : ''}
        id={supplierId}
        supplierSlug={supplierSlug}
        style={{}}
      /> */}
      <Link to={material_questionnaire_path}>questionario material</Link>
      {/* <EditButton
        {...props}
        path="questionnaires"
        label={
          editable
            ? 'Responder questionário do Material'
            : 'Ver questionário do Material'
        }
      /> */}
    </ButtonsContainer>
  );
}
