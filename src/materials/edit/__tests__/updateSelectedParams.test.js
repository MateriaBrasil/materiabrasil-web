import UpdateSelectedParams from '../updateSelectedParams'

const update = jest.fn()
const params = {
  id: 123,
  name: 'Foo material',
  code: 234,
  averagePrice: 'R$ 10',
  imageUrl: 'foo image',
  coverImageUrl: 'http://bar.image',
  listImageUrl: 'http://list.image',
  highlightImageUrl: 'http://highlight.image',
  description: 'Foo description',
  technicalSpecificationUrl: 'http://foo',
}

it('calls correctly', () => {
  UpdateSelectedParams(update)(params)
  expect(update).toHaveBeenCalledWith(params)
})
