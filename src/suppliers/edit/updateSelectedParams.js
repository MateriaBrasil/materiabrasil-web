export default update => params => {
  const {
    id,
    name,
    description,
    website,
    email,
    cnpj,
    company_name,
    municipal_subscription,
    state_subscription,
    phone,
    company_revenue,
    number_of_employees,
    reach,
  } = params

  update({
    id,
    name,
    description,
    website,
    email,
    cnpj,
    company_name,
    municipal_subscription,
    state_subscription,
    phone,
    company_revenue,
    number_of_employees,
    reach,
  })
}
