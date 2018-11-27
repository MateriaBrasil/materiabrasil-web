import renderer from 'react-test-renderer'

import renderOption from '../renderOption'

jest.mock('../createWithParams', () => () => {})

it('render correctly with aboutType Supplier', () => {
  const tree = renderer
    .create(
      renderOption(
        {
          foo: 'bar',
          match: { params: { id: 123 } },
          aboutType: 'Supplier',
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

it('render correctly with aboutType Material', () => {
  const tree = renderer
    .create(
      renderOption(
        {
          foo: 'bar',
          match: { params: { id: 123 } },
          aboutType: 'Material',
          currentUser: {
            suppliers: [
              {
                id: 6,
                materials: [
                  {
                    id: 9,
                  },
                ],
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
