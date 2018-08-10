export default history => values => history.push(`/search/${values.term || ''}`)
