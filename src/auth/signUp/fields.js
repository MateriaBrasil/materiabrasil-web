import { required, email, confirmation, length } from 'redux-form-validators'

export default [
  {
    name: 'first_name',
    label: 'Nome',
    validate: [required()],
  },
  {
    name: 'last_name',
    label: 'Sobrenome',
    validate: [required()],
  },
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
  {
    name: 'confirmation',
    label: 'Confirme a senha',
    type: 'password',
    validate: confirmation({ field: 'password', fieldLabel: 'Senha' }),
  },
]
