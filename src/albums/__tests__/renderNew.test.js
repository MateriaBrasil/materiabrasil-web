import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>New - {props.render({ create: () => {} })}</div>
  ),
}))

jest.mock('formik', () => ({
  Formik: props => (
    <div {...props}>
      New - {props.render({ values: { name: '123' }, touched: {}, errors: {} })}{' '}
      - {props.onSubmit({ name: '123' })}
    </div>
  ),
}))

const routeProps = { match: { params: { id: 123 } } }
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderNew(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
