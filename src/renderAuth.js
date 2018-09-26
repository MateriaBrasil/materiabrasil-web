import React from 'react'
import Comparison from './comparisons/Comparison'
import renderComparison from './renderComparison'

export default authProps => <Comparison render={renderComparison(authProps)} />
