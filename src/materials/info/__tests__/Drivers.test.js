import React from 'react'
import renderer from 'react-test-renderer'

import Drivers from '../Drivers'

jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children, ...props }) => (
    <div {...props}>ResponsiveContainer - {children}</div>
  ),
  RadarChart: ({ children, ...props }) => (
    <div {...props}>RadarChart - {children}</div>
  ),
  PolarGrid: ({ children, ...props }) => (
    <div {...props}>PolarGrid - {children}</div>
  ),
  PolarAngleAxis: ({ children, ...props }) => (
    <div {...props}>PolarAngleAxis - {children}</div>
  ),
  PolarRadiusAxis: ({ children, ...props }) => (
    <div {...props}>PolarAngleAxis - {children}</div>
  ),
  Radar: ({ children, ...props }) => <div {...props}>Radar - {children}</div>,
  Legend: ({ children, ...props }) => <div {...props}>Legend - {children}</div>,
}))

describe('when the material has all indicator', () => {
  it('renders correctly', () => {
    const props = {
      materialityDriver: 32,
      manufactureDriver: 42,
      managementDriver: 57,
      socialDriver: 93,
    }
    const tree = renderer.create(<Drivers {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when the material has only 1 indicator at least', () => {
  it('renders correctly', () => {
    const props = {
      materialityDriver: 45,
      manufactureDriver: -3,
      managementDriver: null,
      socialDriver: null,
    }
    const tree = renderer.create(<Drivers {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when the material has no indicators', () => {
  it('renders correctly', () => {
    const props = {
      materialityDriver: null,
      manufactureDriver: null,
      managementDriver: null,
      socialDriver: null,
    }
    const tree = renderer.create(<Drivers {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
