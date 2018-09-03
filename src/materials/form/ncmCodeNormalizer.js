export default value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')

  let normalizedValue = ''
  let length = onlyNums.length > 8 ? 8 : onlyNums.length
  for (var i = 0; i < length; i++) {
    if (i % 2 === 0 && i !== 0) {
      normalizedValue += '.'
    }
    normalizedValue += onlyNums[i]
  }
  return normalizedValue
}
