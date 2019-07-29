import React from 'react'
import renderer from 'react-test-renderer'

import RecalculateTopsis from '..'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - <div>render - {props.render(props)}</div>
      <div>renderCreated - {props.renderCreated()}</div>
    </div>
  ),
}))

jest.mock('../recalculateRenderCreate', () => props => () => (
  <div {...props}>recalculateRenderCreate - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<RecalculateTopsis />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when dialog is close', () => {
  it('works correctly', () => {
    const testRenderer = renderer.create(<RecalculateTopsis />)
    const instance = testRenderer.getInstance()
    instance.closeDialog()

    expect(instance.state.open).toBe(false)
  })
})

describe('when dialog is open', () => {
  it('works correctly', () => {
    const testRenderer = renderer.create(<RecalculateTopsis />)
    const instance = testRenderer.getInstance()
    // console.log(instance)
    instance.openDialog()

    expect(instance.state.open).toBe(true)
  })
})
