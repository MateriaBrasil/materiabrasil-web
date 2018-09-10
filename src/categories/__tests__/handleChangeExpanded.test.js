import handleChangeExpanded from '../handleChangeExpanded'

describe('when expanded', () => {
  it('adds categoryId to state', () => {
    const mockObject = {
      setState: jest.fn(),
      state: { expandedCategories: [321] },
    }
    const onChangeExpanded = handleChangeExpanded.bind(mockObject)
    onChangeExpanded(1234)({}, true)
    expect(mockObject.setState).toHaveBeenCalledWith({
      expandedCategories: [321, 1234],
    })
  })
})

describe('when not expanded', () => {
  it('removes categoryId from state', () => {
    const mockObject = {
      setState: jest.fn(),
      state: { expandedCategories: [321, 1234] },
    }
    const onChangeExpanded = handleChangeExpanded.bind(mockObject)
    onChangeExpanded(1234)({}, false)
    expect(mockObject.setState).toHaveBeenCalledWith({
      expandedCategories: [321],
    })
  })
})
