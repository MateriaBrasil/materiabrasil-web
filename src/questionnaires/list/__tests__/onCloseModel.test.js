import onCloseModel from '../onCloseModel'

it('add state to history', () => {
  const props = { history: { push: jest.fn() }, match: { params: { id: 12 } } }
  onCloseModel(props)()
  expect(props.history.push).toHaveBeenCalledWith('/materials/12?reload=true')
})
