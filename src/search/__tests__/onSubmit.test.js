import onSubmit from '../onSubmit'

it('calls the correct function', () => {
  const history = { push: jest.fn() }
  onSubmit(history)({ term: 'foo' })
  expect(history.push).toHaveBeenCalledWith(`/search/foo`)
})

describe('without search term', () => {
  it('calls the correct function', () => {
    const history = { push: jest.fn() }
    onSubmit(history)({})
    expect(history.push).toHaveBeenCalledWith(`/search/`)
  })
})
