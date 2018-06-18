import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

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
    usage: 'Bar usage',
  }
  const tree = renderer.create(<Info current={current} />).toJSON()
  expect(tree).toMatchSnapshot()
})
