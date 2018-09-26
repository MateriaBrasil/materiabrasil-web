import React from 'react'
import Screen from './Screen'

export default authProps => comparisonProps => (
  <Screen {...authProps} comparison={comparisonProps} />
)
