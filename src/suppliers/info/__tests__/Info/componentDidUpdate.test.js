import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../../Info'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../../addresses/Addresses', () => props => (
  <div {...props}>Addresses</div>
))

jest.mock('../../../../imageUpload/Avatar', () => props => (
  <div {...props}>Avatar</div>
))

jest.mock('query-string', () => ({
  parse: search => ({ reload: search }),
}))

const current = { id: 1234 }
const actions = { fetchInfo: jest.fn() }
const props = { current, actions, location: { search: '' } }

beforeEach(() => {
  actions.fetchInfo.mockClear()
})

describe('when search exist', () => {
  it('calls fetchInfo function', () => {
    const tree = renderer.create(<Info {...props} />)
    props.location.search = 'foo-search'

    tree.update(<Info {...props} />)
    expect(actions.fetchInfo).toHaveBeenCalledWith(current.id)
  })
})

describe('when search does not exist', () => {
  it('does not call fetchInfo', () => {
    const tree = renderer.create(<Info {...props} />)
    props.location.search = ''

    tree.update(<Info {...props} />)
    expect(actions.fetchInfo).not.toHaveBeenCalled()
  })
})
