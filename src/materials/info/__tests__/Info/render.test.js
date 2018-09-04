import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../../Info'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))
jest.mock('../../../../comments/Comments', () => props => (
  <div {...props}>Comments</div>
))
jest.mock('../../../../favorites/New', () => props => (
  <div {...props}>Favorites</div>
))
jest.mock('../../Supplier', () => props => <div {...props}>Supplier</div>)

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
  }
  const tree = renderer.create(<Info {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
