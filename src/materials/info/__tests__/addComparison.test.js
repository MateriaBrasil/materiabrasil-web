import addComparison from '../addComparison'

it('add comparison', () => {
  const props = {
    current: 'foo',
    comparison: {
      actions: {
        add: jest.fn(),
      },
    },
  }
  addComparison(props)()
  expect(props.comparison.actions.add).toHaveBeenCalledWith('foo')
})
