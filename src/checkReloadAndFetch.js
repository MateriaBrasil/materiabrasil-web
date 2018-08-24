import queryString from 'query-string'

export default props => {
  const { location, actions, current } = props
  const { id } = current
  const { search } = location
  const query = queryString.parse(search)
  const { reload } = query

  if (reload) {
    const { fetchInfo } = actions
    fetchInfo(id)
  }
}
