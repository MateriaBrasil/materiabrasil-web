import React from 'react'
import renderer from 'react-test-renderer'

import renderMember from '../renderMember'

jest.mock('materials/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render({ create: () => {} })} - {props.renderCreated()}
    </div>
  ),
}))

jest.mock('formik', () => ({
  Formik: props => {
    props.validate({ email: 'fesg' })
    props.validate({ email: '' })
    props.onSubmit({ email: 'fesg' })

    return (
      <div {...props}>
        New -{' '}
        {props.render({ values: { email: '123' }, touched: {}, errors: {} })}
      </div>
    )
  },
}))

jest.mock('../../payments/form/render', () =>
  jest.fn(props => routeProps => <div {...props}>render</div>),
)

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

const routeProps = { match: { params: { id: 123 } } }
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderMember(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
