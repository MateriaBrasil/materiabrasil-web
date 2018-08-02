import Children from '../Children'

it('returns correctly', () => {
  const props = { foo: 'bar', children: 'foo-children' }
  const children = Children(props)
  expect(children).toBe(props.children)
})
