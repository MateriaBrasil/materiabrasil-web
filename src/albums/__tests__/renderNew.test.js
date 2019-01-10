import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render({ create: () => {} })}- {props.renderCreated()}
    </div>
  ),
}))

jest.mock('formik', () => ({
  Formik: props => {
    props.validate({})
    props.validate({ name: '123' })
    props.onSubmit({ name: '123' })

    return (
      <div {...props}>
        New -{' '}
        {props.render({ values: { name: '123' }, touched: {}, errors: {} })}
      </div>
    )
  },
}))

const routeProps = {
  match: { params: { id: 123 } },
  history: { replace: () => {} },
}
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
  setCurrentUser: jest.fn(),
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderNew(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
