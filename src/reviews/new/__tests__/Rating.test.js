import React from 'react'
import renderer from 'react-test-renderer'

import Rating from '../Rating'

const onChange = jest.fn()

const tree = renderer.create(<Rating onChange={onChange} />)

describe('with initial state', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('when calling changeRate', () => {
  it('renders correctly', () => {
    tree.getInstance().changeRate(3)
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange correctly', () => {
    expect(onChange).toHaveBeenCalledWith(3)
  })
})

describe('when clicking StarBorder', () => {
  it('calls onChange correctly', () => {
    tree.getInstance().changeRate(0)
    onChange.mockClear()
    tree.toJSON().children[4].props.onClick()
    expect(onChange).toHaveBeenCalledWith(5)
  })

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('when clicking Star', () => {
  it('calls onChange correctly', () => {
    tree.getInstance().changeRate(5)
    onChange.mockClear()
    tree.toJSON().children[4].props.onClick()
    expect(onChange).toHaveBeenCalledWith(5)
  })

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
