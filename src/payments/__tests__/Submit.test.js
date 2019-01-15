import React from 'react'
import renderer from 'react-test-renderer'

import Submit from '../Submit'
jest.mock('@reach/router', () => ({
  Link: props => <div>{props.children}</div>,
}))

it('renders correctly when there is no card on the list', () => {
  const messageToken = 'saiduhu2321'
  const offer = { valueToPay: 12 }
  const tree = renderer
    .create(
      <Submit total={0} list={[]} offer={offer} messageToken={messageToken} />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when there is card on the list', () => {
  const messageToken = 'saiduhu2321'
  const offer = { valueToPay: 12 }
  const card = { id: 1, card: { holderName: 'SAIUDHH ASIUDHS' }, value: 100 }
  const tree = renderer
    .create(
      <Submit
        total={0}
        list={[card]}
        offer={offer}
        messageToken={messageToken}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
