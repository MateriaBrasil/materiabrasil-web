import React from 'react'
import Comparisons from './comparisons/Comparisons'
import renderComparisons from './renderComparisons'

export default authProps => (
  <Comparisons render={renderComparisons(authProps)} />
)
