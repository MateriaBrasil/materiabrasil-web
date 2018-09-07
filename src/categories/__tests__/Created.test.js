import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

const props = {
  created: { categoryId: 1234 },
  setMaterialCategories: jest.fn(),
  materialCategories: [{ id: 12, categoryId: 1234 }],
  categories: [
    { id: 123, parentId: 22 },
    { id: 1234, parentId: 11 },
    { id: 11, parentId: 444 },
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

describe('with parent and multipleChoice', () => {
  it('does not call setMaterialCategories', () => {
    const categories = [
      { id: 123, parentId: 22 },
      { id: 1234, parentId: 11 },
      { id: 11, parentId: 444, multipleChoice: true },
    ]
    renderer.create(<Created {...props} categories={categories} />)
    expect(props.setMaterialCategories).not.toHaveBeenCalled()
  })
})

describe('with children', () => {
  it('calls setMaterialCategories correctly', () => {
    const categories = [
      { id: 123, parentId: 22, children: [] },
      { id: 12, parentId: 11, children: [<h1 />] },
      { id: 11, parentId: 444, children: [{ id: 1234 }] },
    ]
    renderer.create(<Created {...props} categories={categories} />)
    expect(props.setMaterialCategories).toHaveBeenCalledWith([
      {
        id: 12,
        categoryId: 1234,
      },
    ])
  })
})

describe('without created in materialCategories', () => {
  it('calls setMaterialCategories correctly', () => {
    const materialCategories = [{ id: 12, categoryId: 123 }]
    const categories = [
      { id: 123, parentId: 22, children: [] },
      { id: 12, parentId: 11, children: [<h1 />] },
      { id: 11, parentId: 444, children: [{ id: 1234 }] },
    ]
    renderer.create(
      <Created
        {...props}
        materialCategories={materialCategories}
        categories={categories}
      />,
    )

    expect(props.setMaterialCategories).toHaveBeenCalledWith([
      {
        id: 12,
        categoryId: 123,
      },
    ])
  })
})
