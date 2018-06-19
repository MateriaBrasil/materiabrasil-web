import React from 'react'

export default text => {
  if (!text) {
    return ''
  }

  return text.split('\n').map(
    (item, key) =>
      item &&
      item !== '' && (
        <span style={{ display: 'block' }} key={key}>
          {item}
        </span>
      ),
  )
}
