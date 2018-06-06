import React from 'react'

export default text => {
  if (!text) {
    return ''
  }

  return text.split('\n').map((item, key) => (
    <span key={key}>
      {item}
      <br />
    </span>
  ))
}
