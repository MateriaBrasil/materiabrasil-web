import renderer from 'react-test-renderer'

import renderError from '../renderError'

it('renders correctly', () => {
  const tree = renderer.create(renderError('foo')).toJSON()
  expect(tree).toMatchSnapshot()
})
