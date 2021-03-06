import React from 'react'
import renderer from 'react-test-renderer'

import renderEdit from '../renderEdit'

jest.mock('croods', () => ({
  Edit: props => (
    <div {...props}>
      Edit - {props.render()} {props.renderUpdated()}
    </div>
  ),
}))

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

jest.mock('../edit/render', () => props => info => (
  <div {...props}>Edit Form</div>
))

describe(' id', () => {
  it('renders correctly', () => {
    const routeProps = { match: { params: { id: 1234 } } }

    const tree = renderer
      .create(renderEdit({ foo: 'bar' })(routeProps))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
