import UpdateSelectedParams from '../updateSelectedParams'

const update = jest.fn()
const params = {
  id: 1234,
  image_url: 'foo-url',
  city: 'foo-city',
  state: 'foo-state',
  country: 'foo-country',
  bio: 'foo-bio',
  company: 'foo-company',
  website: 'foo-website',
  workTitle: 'foo-workTitle',
}

it('calls correctly', () => {
  UpdateSelectedParams(update)(params)
  expect(update).toHaveBeenCalledWith({ ...params })
})
