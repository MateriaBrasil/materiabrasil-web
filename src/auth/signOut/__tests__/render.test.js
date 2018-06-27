import renderer from 'react-test-renderer'
import render from '../render'

it('renders correctly', () => {
  const tree = renderer.create(render()(null, {})).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('while destroying', () => {
  it('renders correctly', () => {
    const tree = renderer.create(render()(null, { destroying: true })).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when destroyed', () => {
  it('renders correctly', () => {
    const props = { setCurrentUser: jest.fn() }
    const tree = renderer
      .create(render(props)(null, { destroyed: {} }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
