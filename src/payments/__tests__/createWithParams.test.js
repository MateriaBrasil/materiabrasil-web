import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn()

  const params = {
    name: 'test test',
    number: '378282246310005',
    expiry: '03/19',
    cvc: '123',
    value: 123.45,
  }

  global.Iugu = {
    CreditCard: () => {},
    setAccountID: () => {},
    setTestMode: () => {},
    createPaymentToken: (creditCard, callBack) => {
      callBack({ id: '123123' })
    },
  }

  const actions = { setCurrent: jest.fn() }

  createWithParams(create, { actions })(params, { setSubmitting: jest.fn() })

  expect(create).toHaveBeenCalledWith({
    token: '123123',
  })
})

it('with errors', () => {
  const create = jest.fn()

  const params = {
    name: 'test test',
    number: '378282246310005',
    expiry: '03/19',
    cvc: '123',
    value: 123.45,
  }

  global.Iugu = {
    CreditCard: () => {},
    setAccountID: () => {},
    setTestMode: () => {},
    createPaymentToken: (creditCard, callBack) => {
      callBack({
        id: '123123',
        errors: { number: 'is_invalid', verification_value: 'is_invalid' },
      })
    },
  }

  const actions = { setCurrent: jest.fn() }

  createWithParams(create, { actions })(params, {
    setSubmitting: jest.fn(),
    setErrors: jest.fn(),
  })

  expect(create).not.toHaveBeenCalled()
})
