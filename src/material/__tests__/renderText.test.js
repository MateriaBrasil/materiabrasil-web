import renderer from 'react-test-renderer'

import renderText from '../renderText'

it('renders correctly with text', () => {
  const tree = renderer.create(renderText('foo')).toJSON()
  expect(tree).toMatchSnapshot()
})

it('breaks multinine text into lines', () => {
  const tree = renderer.create(renderText('foo\nbar')).toJSON()
  expect(tree).toMatchSnapshot()
})

it('returns empty string without text', () => {
  expect(renderText()).toEqual('')
})
