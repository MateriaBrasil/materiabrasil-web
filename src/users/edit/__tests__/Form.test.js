import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('redux-form', () => ({
  reduxForm: () => component => component,
}))

jest.mock('../../../form/TextField', () => props => (
  <div {...props}>Text Field</div>
))

it('renders correctly', () => {
  const onSubmit = jest.fn()
  const handleSubmit = jest.fn()
  const props = { updateError: 'foo-error', onSubmit, handleSubmit }
  const tree = renderer.create(<Form {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when updating', () => {
  it('renders correctly', () => {
    const onSubmit = jest.fn()
    const handleSubmit = jest.fn()
    const props = { updateError: 'foo-error', onSubmit, handleSubmit }
    const tree = renderer.create(<Form updating {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
