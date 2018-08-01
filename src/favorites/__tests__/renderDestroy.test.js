import renderer from 'react-test-renderer'

import renderDestroy from '../renderDestroy'

it('renders correctly', () => {
  const props = { destroying: false }
  const tree = renderer
    .create(renderDestroy(props)('destroy', { destroyed: 'foo' }))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
