import React from 'react'
import renderer from 'react-test-renderer'

import Addresses from '../Addresses'

jest.mock('react-router-dom/Link', () => props => (
    <div {...props}>Link - {props.children}</div>
))
jest.mock('../New', () => props => (
    <div {...props}>New - {props.children}</div>
))
jest.mock('../List', () => props => (
    <div {...props}>List - {props.children}</div>
))


it('renders correctly', () => {
    const pathname = 'foo'
    const location =  { pathname }
    const props = { location }
    const tree = renderer.create(<Addresses {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
}) 

describe('with current user', () => {
    it('renders correctly', () => {
        const pathname = 'foo'
        const location =  { pathname }
        const props = { location }
        const tree = renderer.create(<Addresses currentUser={{}} supplier={{}} {...props}/>)
        expect(tree).toMatchSnapshot()
    }) 
}) 
