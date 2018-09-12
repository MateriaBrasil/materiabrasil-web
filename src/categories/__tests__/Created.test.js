import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

const props = {
  created: { categoryId: 1234 },
  setMaterialCategories: jest.fn(),
  materialCategories: [{ id: 12, categoryId: 1234 }],
  categories: [
    { id: 123, parentId: null },
    { id: 1234, parentId: 123 },
    { id: 11, parentId: 1234 },
  ],
}

beforeEach(() => {
  props.setMaterialCategories.mockClear()
})

describe('without children', () => {
  it('calls setMaterialCategories correctly', () => {
    renderer.create(<Created {...props} />)
    expect(props.setMaterialCategories).toHaveBeenCalledWith([
      {
        id: 12,
        categoryId: 1234,
      },
    ])
  })
})

describe('without achildren', () => {
  it('calls setMaterialCategories correctly', () => {
    renderer.create(<Created {...props} />)
    expect(props.setMaterialCategories).not.toHaveBeenCalled()
  })
})
