import { required, length, numericality } from 'redux-form-validators'
import { cardNumber, cardExpiry } from './validations/validations'
import generateValidate from './generateValidate'
import { normalizeField } from './validations/creditCard'

const currency = ({ total, offer: { valueToPay } }) => value =>
  numericality({ '>': 0, '<=': valueToPay - total })(
    value.toString().replace(',', '.'),
  )

const createValidations = props => ({
  name: [required()],
  number: [required(), cardNumber],
  expiry: [required(), length({ min: 5, max: 5 }), cardExpiry],
  cvc: [required(), length({ min: 3, max: 4 })],
  value: [required(), currency(props)],
})

const createTranslations = ({ total, offer: { valueToPay } }) => ({
  [`must be less than or equal to ${valueToPay -
    total}`]: 'É maior que o saldo a pagar',
  'must be greater than 0': 'Deve ser maior que zero',
  'is required': 'Campo obrigatório',
  'is not a number': 'Não é um número válido',
  'is too short (minimum is 5 characters)': 'Ex: MM/AA',
  'is too short (minimum is 3 characters)': 'Ex: 123',
})

export default generateValidate(
  createValidations,
  createTranslations,
  normalizeField,
)
