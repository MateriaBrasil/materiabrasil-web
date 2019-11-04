import React from 'react';

import Form from '../form/Form';

export default props => ({ create, creating, error }) => {
  const handleSubmit = async function(e) {
    console.log(e);
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
          state: e.addresses_attributes.state,
          city: e.addresses_attributes.city,
          address_type: e.addresses_attributes.addressType,
          street_address: e.addresses_attributes.streetAddress,
          country: e.addresses_attributes.country,
          zip_code: e.addresses_attributes.zipCode,
          phone_number: e.addresses_attributes.phoneNumber,
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
