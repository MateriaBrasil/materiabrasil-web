import pick from 'lodash/pick'

const whitelist = [
  'id',
  'name',
  'description',
  'website',
  'email',
  'cnpj',
  'companyName',
  'municipalSubscription',
  'stateSubscription',
  'phone',
  'companyRevenue',
  'typeOfCompany',
  'reach',
]

export default update => params => {
  const paramsToUpdate = pick(params, whitelist)
  update(paramsToUpdate)
}
