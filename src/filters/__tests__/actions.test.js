import { selectCategory, unselectCategory, reset } from '../actions'

describe('reset', () => {
  it('calls correctly', () => {
    expect(reset()).toEqual({
      type: '@filters/RESET',
    })
  })
})

describe('selectCategory', () => {
  it('calls correctly', () => {
    expect(selectCategory({ foo: 'bar' })).toEqual({
      type: '@filters/SELECT_CATEGORY',
      category: { foo: 'bar' },
    })
  })
})

describe('unselectCategory', () => {
  it('calls correctly', () => {
    expect(unselectCategory({ foo: 'bar' })).toEqual({
      type: '@filters/UNSELECT_CATEGORY',
      category: { foo: 'bar' },
    })
  })
})
