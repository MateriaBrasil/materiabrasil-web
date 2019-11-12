import React from 'react';

import Form from '../form/Form';

export default props => ({ create, creating, error }) => {
  const handleSubmit = async function(e) {
    const response = {
      name: e.name,
      website: e.website,
      description: e.description,
      email: e.email,
      cnpj: e.cnpj,
      company_name: e.companyName,
      municipal_subscription: e.municipalSubscription,
      state_subscription: e.stateSubscription,
      phone: e.phone,
      company_revenue: e.companyRevenue,
      reach: e.reach,
      addresses_attributes: [
        {
          state: e.addresses.state,
          city: e.addresses.city,
          address_type: 'postal',
          street_address: e.addresses.streetAddress,
          country: e.addresses.country,
          zip_code: e.addresses.zipCode,
          phone_number: e.addresses.phoneNumber,
        },
      ],
    };

    create({
      supplier: response,
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitting={creating}
      createError={error}
      buttonText="Registrar fornecedor"
      {...props}
    />
  );
};
