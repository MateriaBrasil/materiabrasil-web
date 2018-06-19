import Validators from 'redux-form-validators'

Object.assign(Validators.messages, {
  email: 'Não é um email válido',
  presence: 'Obrigatório',
  confirmation: 'Não é igual à senha',
})
