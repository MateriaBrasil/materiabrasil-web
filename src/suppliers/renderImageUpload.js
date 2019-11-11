import render from 'imageUpload/render';

export default props => routeProps => {
  console.log(props);
  const { id } = routeProps.match.params;
  const name = 'suppliers';
  const redirectUrl = `/suppliers/${props.currentUser.suppliers[0].slug}`;

  return render({
    ...props,
    ...routeProps,
    id,
    name,
    redirectUrl,
  });
};
