export default create => data =>
  create({
    email: data['email'],
    redirectUrl: `${process.env.REACT_APP_URL}/auth/reset-password`,
  })
