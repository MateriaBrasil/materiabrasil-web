import React from 'react'
import renderer from 'react-test-renderer'

import Dialog from '../Dialog'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = { match: { params: { id: 1234 } }, title: 'foo-title' }
    const tree = renderer.create(<Dialog {...props}>Foo</Dialog>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when calling onDialogSubmit', () => {
  it('calls handleSubmit correctly', () => {
    const eventSpy = jest.fn(props => props)
    const handleSubmit = jest.fn(onSubmit => ev => eventSpy(ev))
    const event = { foo: 'bar' }
    const props = {
      match: { params: { id: 1234 } },
      title: 'foo-title',
      onSubmit: 'foo-submit',
      handleSubmit,
    }
    const tree = renderer.create(<Dialog {...props}>Foo</Dialog>).toJSON()
    tree.children[1].props.onSubmit(event)

    expect(handleSubmit).toHaveBeenCalledWith(props.onSubmit)
    expect(eventSpy).toHaveBeenCalledWith(event)
  })
})
