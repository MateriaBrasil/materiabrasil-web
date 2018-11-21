import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('../Created', () => props => <div {...props}>Created</div>)

it('render correctly', () => {
  const tree = renderer
    .create(renderCreated({ foo: 'bar' })({ questionId: 1234 }))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
