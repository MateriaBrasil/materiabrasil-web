import React from 'react'
import renderer from 'react-test-renderer'

import Supplier from '../Supplier'

jest.mock('croods', () => ({
  Info: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../supplier/render', () => props => info => <div>Supplier</div>)

it('renders correctly', () => {
  const tree = renderer.create(<Supplier supplierId="123" />).toJSON()
  expect(tree).toMatchSnapshot()
})
