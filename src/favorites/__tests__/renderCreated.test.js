import React from 'react'
import renderer from 'react-test-renderer'
import renderCreated from '../renderCreated'

const props = { bar: 'foo' }

jest.mock('../Created', () => props => <div {...props}>Created</div>)

const tree = renderer.create(renderCreated(props)()).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})
