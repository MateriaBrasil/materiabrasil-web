import React from 'react'
import renderer from 'react-test-renderer'

import Chart from '../Chart'

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

jest.mock('@material-ui/core/Drawer', () => props => (
  <div {...props}>Drawer - {props.children}</div>
))

jest.mock('../ChipsContainer', () => props => (
  <div {...props}>ChipsContainer - {props.children}</div>
))

jest.mock('react-media', () => props => (
  <div {...props}>Media - {props.children}</div>
))

const props = {
  list: [{ id: 1, name: 'foo' }],
  actions: { close: jest.fn() },
}

it('renders correctly', () => {
  const tree = renderer.create(<Chart {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
