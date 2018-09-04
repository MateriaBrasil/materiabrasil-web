import chunk from 'lodash/chunk'

export default (
  groupLength,
  maxLength = Infinity,
  separator = '.',
) => value => {
  if (typeof value === 'string') {
    const numbers = value.replace(/[^\d]/g, '')
    const limited = numbers.substring(0, maxLength)
    const chunked = chunk(limited, groupLength).map(x => x.join(''))
    return chunked.join(separator)
  }
}
