import renderer from 'react-test-renderer'

import renderOption from '../renderOption'

jest.mock('../createWithParams', () => () => {})

it('render correctly', () => {
  const tree = renderer
    .create(
      renderOption(
        {
          foo: 'bar',
          match: { params: { id: 123 } },
          currentUser: {
            suppliers: [
              {
                id: 6,
              },
            ],
          },
        },
        { id: 123 },
      )({
        id: 1234,
      }),
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
