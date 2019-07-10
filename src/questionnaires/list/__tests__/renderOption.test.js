import renderer from 'react-test-renderer'

import renderOption from '../renderOption'

jest.mock('../createWithParams', () => () => {})

describe('when aboutType is Supplier', () => {
  describe('when current user is owner of the supplier', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 6 } },
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
  })

  describe('when current user is not owner of the supplier', () => {
    it('renders correctly', () => {
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
  })

  describe('when current user is admin', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 6 } },
              aboutType: 'Supplier',
              currentUser: {
                suppliers: [],
                admin: true,
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
  })

  describe('without current user', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 6 } },
              aboutType: 'Supplier',
            },
            { id: 123 },
          )({
            id: 1234,
          }),
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('when aboutType is Material', () => {
  describe('when current user is owner of the material', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 9 } },
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
  })

  describe('when current user is not owner of the material', () => {
    it('renders correctly', () => {
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
  })

  describe('when current user is admin', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 123 } },
              aboutType: 'Material',
              currentUser: {
                suppliers: [],
                admin: true,
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
  })

  describe('without currentUser', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          renderOption(
            {
              foo: 'bar',
              match: { params: { id: 123 } },
              aboutType: 'Material',
            },
            { id: 123 },
          )({
            id: 1234,
          }),
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
