import queryString from 'query-string'

export default (create, props) => data => {
  let params = queryString.parse(props.location.search)
  create({
    password: data['password'],
    passwordConfirmation: data['passwordConfirmation'],
    resetPasswordToken: params['reset_password_token'],
  })
}
