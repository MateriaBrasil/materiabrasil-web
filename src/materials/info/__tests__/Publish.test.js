import React from 'react'
import renderer from 'react-test-renderer'

import Publish from '../Publish'

jest.mock('croods', () => ({
  Edit: ({ ...props }) => {
    props.renderUpdated()
    return props.render({ info: { published: false }, update: () => {} })
  },
}))

jest.mock('@material-ui/core/Switch', () => props => {
  props.onChange()
  return <div {...props}>CircularProgress</div>
})

it('renders correctly', () => {
  const current = {
    name: 'foo',
    imageUrl: 'bar',
    description: 'info',
    averagePrice: '100',
    code: '999',
    supplierName: 'Foo Supplier',
    supplierContact: 'foo@bar.com',
    manufacturingLocation: 'Foo City/FO',
    salesLocation: 'Bar City/BR',
    technicalSpecification_url: 'http://foo',
    properties: 'Foo properties',
    supplierId: 1234,
  }
  const props = {
    current,
    currentUser: { suppliers: [{ id: 1234 }] },
    location: {},
    match: { params: { id: 1 } },
    categoryFilled: {},
  }
  const tree = renderer.create(<Publish {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
