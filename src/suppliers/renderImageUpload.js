import render from 'imageUpload/render'

export default props => routeProps => {
  const { id } = routeProps.match.params
  const name = 'suppliers'
  const redirectUrl = `/suppliers/${id}`

  return render({
    ...props,
    ...routeProps,
    id,
    name,
    redirectUrl,
  })
}
