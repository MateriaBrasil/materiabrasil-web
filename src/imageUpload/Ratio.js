import React from 'react'
import Ratio from 'react-ratio'
import omit from 'lodash/omit'

export default ({ width, height, ...props }) => {
  const ratioProps = omit(props, ['editPath', 'imageUrl', 'preserveRatio'])

  return (
    <Ratio
      ratio={width / height}
      style={{ overflow: 'hidden', maxWidth: width, maxHeight: height }}
      {...ratioProps}
    />
  )
}
