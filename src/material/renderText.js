import React from 'react'

export default text => {
  if (!text) {
    return ''
  }

  return text
    .split('\n')
    .map((item, key) => item && item !== '' && <div key={key}>{item}</div>)
}
