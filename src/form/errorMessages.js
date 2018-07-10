import Validators from 'redux-form-validators'

Object.assign(Validators.messages, {
  email: 'Não é um email válido',
  presence: 'Obrigatório',
  confirmation: 'Não é igual à senha',
  tooShort:
    'Mínimo de {count, number} {count, plural, one {caracter} other {caracteres}}',
  greaterThanOrEqualTo: 'Deve ser maior ou igual a {count, number}',
  lessThanOrEqualTo: 'Deve ser menor ou igual a {count, number}',
})
