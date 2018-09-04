export default value => (maxLength, groupLength) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  let normalizedValue = ''
  let length = onlyNums.length > maxLength ? maxLength : onlyNums.length

  for (let i = 0; i < length; i++) {
    if (i % groupLength === 0 && i !== 0) {
      normalizedValue += '.'
    }
    normalizedValue += onlyNums[i]
  }
  return normalizedValue
}
