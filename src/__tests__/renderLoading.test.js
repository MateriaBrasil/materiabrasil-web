import renderer from 'react-test-renderer'
import renderLoading from '../renderLoading'

it('renders correctly', () => {
  const tree = renderer.create(renderLoading()).toJSON()
  expect(tree).toMatchSnapshot()
})
