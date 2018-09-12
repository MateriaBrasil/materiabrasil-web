import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

beforeEach(() => {
  props.setMaterialCategories.mockClear()
})

const props = {
  created: { categoryId: 1234 },
  setMaterialCategories: jest.fn(),
  materialCategories: [{ id: 12, categoryId: 1234 },{ id: 12, categoryId: 11 }],
  categories: [
    { id: 123, parentId: null },
    { id: 1234, parentId: 123 },
    { id: 11, parentId: 1234 },
  ],
}

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

describe('when root category is multipleChoice', () => {
  it('does not call setMaterialCategories', () => {
    const categories = [
      { id: 123, parentId: null, multipleChoice: true },
      { id: 1234, parentId: 123 },
      { id: 11, parentId: 1234 },
    ]
    renderer.create(<Created {...props} categories={categories} />)
    expect(props.setMaterialCategories).not.toHaveBeenCalled()
  })
})
