import translateReach from '../translateReach'

it('translates correctly', () => {
  expect(translateReach('city')).toEqual('Cidade')
  expect(translateReach('state')).toEqual('Estado')
  expect(translateReach('country')).toEqual('País')
  expect(translateReach('continent')).toEqual('Continente')
  expect(translateReach('global')).toEqual('Global')
})
