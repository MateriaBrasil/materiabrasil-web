import render from 'imageUpload/render'

export default props => routeProps => {
  const { id } = routeProps.match.params
  const name = 'materials'
  const redirectUrl = `/materials/${id}`

  return render({
    ...props,
    ...routeProps,
    id,
    name,
    redirectUrl,
  })
}
