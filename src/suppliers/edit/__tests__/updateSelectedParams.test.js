import UpdateSelectedParams from '../updateSelectedParams'

const update = jest.fn()
const params = {
  id: 1234,
  name: 'foo-name',
  description: 'foo-description',
  website: 'foo-website',
  email: 'foo-email',
  cnpj: 'foo-cnpj',
  companyName: 'foo-company',
  municipalSubscription: 'foo-subs',
  stateSubscription: 'foo-subs',
  phone: '(00) 0000 0000',
  companyRevenue: 'foo-revenue',
  numberOfEmployees: null,
  reach: 'Country',
}

it('calls correctly', () => {
  UpdateSelectedParams(update)(params)
  expect(update).toHaveBeenCalledWith(params)
})
