import React from 'react';
import { ButtonsContainer } from './DriversStyles';
import { Link } from 'react-router-dom';
import get from 'lodash/get';
import ReactGA from 'react-ga';

export default function(props) {
  const { currentUser, current, supplier } = props;
  let editable;
  if (current && currentUser && currentUser.suppliers[0]) {
    if (
      currentUser.admin === true ||
      current.supplierId === currentUser.suppliers[0].id
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
    if (!editable && currentUser && current) {
      ReactGA.event({
        category: 'Ver Questionário Material',
        action: `${current.supplierName} ${current.name}`,
        label: current.name,
      });
    } else if (!editable && currentUser && supplier) {
      ReactGA.event({
        category: 'Ver Questionário Fornecedor',
        action: `${supplier.name}`,
      });
    }
  };

  const material_questionnaire_path = `/materials/${
    current.slug
  }/questionnaires`;
  const supplier_questionnaire_path = `/suppliers/${
    current.supplierSlug
  }/questionnaires`;

  return (
    <ButtonsContainer>
      <Link onClick={gaFornecedorEvent} to={supplier_questionnaire_path}>
        Questionários do fornecedor
      </Link>
      {/* <AnswerQuestionnaire
        currentUser={currentUser ? currentUser : ''}
        {...props}
        supplier={supplier ? supplier : ''}
        id={supplierId}
        supplierSlug={supplierSlug}
        style={{}}
      /> */}
      <Link onClick={gaFornecedorEvent} to={material_questionnaire_path}>
        Questionários do material
      </Link>
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
