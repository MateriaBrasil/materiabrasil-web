import React from 'react'
import renderer from 'react-test-renderer'
import Symbol from '../Symbol'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

describe('When calling handleClickOpen', () => {
  it('it setState open to true', () => {
    const props = {
      imageUrl: 'foo',
      title: 'bar',
      desc: 'barFoo',
    }
    const instance = renderer
      .create(<Symbol {...props}>foo-text</Symbol>)
      .getInstance()

    instance.handleClickOpen()

    expect(instance.state.open).toEqual(true)
  })
})

describe('When calling handleClose', () => {
  it('it setState open to false', () => {
    const props = {
      imageUrl: 'foo',
      title: 'bar',
      desc: 'barFoo',
    }
    const instance = renderer
      .create(<Symbol {...props}>foo-text</Symbol>)
      .getInstance()

    instance.setState = jest.fn()
    instance.handleClose()

    expect(instance.setState).toHaveBeenCalledWith({ open: false })
  })
})
