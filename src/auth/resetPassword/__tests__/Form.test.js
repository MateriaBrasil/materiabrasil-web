import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('../../../SingleColumn', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../form/Form', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../form/TextField', () => props => <div {...props}>Field</div>)

jest.mock('Error', () => props => <div {...props}>Error</div>)

jest.mock('redux-form', () => ({
  reduxForm: () => component => component,
}))

it('renders correctly', () => {
  const props = { onSubmit: jest.fn(), title: 'foo', error: {} }

  const tree = renderer.create(<Form {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
