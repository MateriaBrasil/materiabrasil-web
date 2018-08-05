import React from 'react'
import renderer from 'react-test-renderer'
import map from 'lodash/map'
import Rating from '../Rating'

map([1.25, 2.5, 3.75], value => {
  describe(`with value as ${value}`, () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Rating rating={value} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
