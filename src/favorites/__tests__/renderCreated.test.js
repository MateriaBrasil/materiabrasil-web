import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

it('renders correctly', () => {
  const snackbar = { actions: { setMessage: jest.fn() } }
  const props = { snackbar }
  const tree = renderer.create(renderCreated(props)()).toJSON()
  expect(tree).toMatchSnapshot()
  expect(snackbar.actions.setMessage).toHaveBeenCalledWith(
    'Material adicionado com sucesso',
  )
})
