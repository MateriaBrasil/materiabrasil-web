import { required, email, length } from 'redux-form-validators'

export default [
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    validate: [required(), email()],
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    validate: [required(), length({ min: 8 })],
  },
]
