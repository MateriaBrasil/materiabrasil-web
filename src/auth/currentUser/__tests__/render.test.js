import renderer from 'react-test-renderer'

import render from '../render'

it('returns its internal render function', () => {
  const renderProp = jest.fn()
  const info = { foo: 'bar' }
  const props = { info }
  const currentUser = {}

  render({ render: renderProp })(currentUser, props)

  expect(renderProp).toHaveBeenCalledWith(info, props)
})

describe('with fetchingInfo', () => {
  it('renders loading', () => {
    const renderProp = jest.fn()
    const info = { foo: 'bar' }
    const props = { info, fetchingInfo: true }

    const tree = renderer
      .create(render({ render: renderProp })({}, props))
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
