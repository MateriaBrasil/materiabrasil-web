import React from 'react'
import renderer from 'react-test-renderer'

import List from '../../List'

jest.mock('react-router-dom/Link', () => props => <div {...props} />)
jest.mock('../../../../favorites/New', () => props => (
  <div {...props}>Favorite</div>
))

const list = []
const fetchList = jest.fn()
const props = {
  location: { search: 'foo' },
  listProps: { actions: { fetchList } },
}

beforeEach(() => {
  fetchList.mockClear()
})

describe('with diferent search', () => {
  it('calls fetchList', () => {
    const tree = renderer.create(<List list={list} {...props} />)
    const propsUpdated = {
      location: { search: 'bar' },
      listProps: { actions: { fetchList } },
    }
    tree.update(<List list={list} {...propsUpdated} />)

    expect(fetchList).toHaveBeenCalled()
  })
})

describe('with same search', () => {
  it('calls fetchList', () => {
    const tree = renderer.create(<List list={list} {...props} />)
    const propsUpdated = {
      location: { search: 'foo' },
      listProps: { actions: { fetchList } },
    }
    tree.update(<List list={list} {...propsUpdated} />)

    expect(fetchList).not.toHaveBeenCalled()
  })
})
