import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

it('renders correctly with title', () => {
  const tree = renderer
    .create(
      <Form title="foo" callToAction="bar">
        Baz
      </Form>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly without title', () => {
  const tree = renderer.create(<Form callToAction="foo">Bar</Form>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with error', () => {
  const tree = renderer
    .create(
      <Form error="foo" callToAction="bar">
        Baz
      </Form>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
