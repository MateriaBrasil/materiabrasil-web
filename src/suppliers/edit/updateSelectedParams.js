export default update => params => {
  const {
    id,
    name,
    description,
    website,
    email,
    cnpj,
    companyName,
    municipalSubscription,
    stateSubscription,
    phone,
    companyRevenue,
    numberOfEmployees,
    reach,
  } = params

  update({
    id,
    name,
    description,
    website,
    email,
    cnpj,
    companyName,
    municipalSubscription,
    stateSubscription,
    phone,
    companyRevenue,
    numberOfEmployees,
    reach,
  })
}
