export default update => params => {
  const response = {
    id: params.id,
    name: params.name,
    website: params.website,
    description: params.description,
    email: params.email,
    cnpj: params.cnpj,
    company_name: params.companyName,
    municipal_subscription: params.municipalSubscription,
    state_subscription: params.stateSubscription,
    phone: params.phone,
    company_revenue: params.companyRevenue,
    type_of_company: params.typeOfCompany,
    reach: params.reach,
    addresses_attributes: [
      {
        id: params.addresses.id,
        state: params.addresses.state,
        city: params.addresses.city,
        address_type: 'postal',
        street_address: params.addresses.streetAddress,
        country: params.addresses.country,
        zip_code: params.addresses.zipCode,
        phone_number: params.addresses.phoneNumber,
      },
    ],
  };

  update({
    supplier: response,
    id: response.id,
  });
};
