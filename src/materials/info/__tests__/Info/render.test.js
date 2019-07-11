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

jest.mock('croods', () => ({
  Edit: ({ children, ...props }) => <div {...props}>Edit - {children}</div>,
}))

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

describe("when the current user is the owner of the material's supplier", () => {
  it('renders correctly', () => {
    const props = {
      current,
      currentUser: { suppliers: [{ id: 1234 }] },
      location: {},
      match: { params: { id: 1 } },
      categoryFilled: {},
    }
    const tree = renderer.create(<Info {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("when the current user is not the owner of the material's supplier", () => {
  it('renders correctly', () => {
    const props = {
      current,
      currentUser: { id: 1, name: 'foo', suppliers: [{ id: 4321 }] },
      location: {},
      match: { params: { id: 1 } },
      categoryFilled: {},
    }
    const tree = renderer.create(<Info {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when the current user is admin', () => {
  it('renders correctly', () => {
    const props = {
      current,
      currentUser: { id: 1, name: 'foo', admin: true, suppliers: [] },
      location: {},
      match: { params: { id: 1 } },
      categoryFilled: {},
    }
    const tree = renderer.create(<Info {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
