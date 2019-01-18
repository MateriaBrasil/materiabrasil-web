/* globals Iugu */

export default (create, props) => params => {
  const { name, number, expiry, cvc } = params

  const creditCard = Iugu.CreditCard(
    number,
    expiry.split('/')[0],
    expiry.split('/')[1],
    name.split(' ')[0],
    name.split(' ')[1],
    cvc,
  )

  Iugu.setAccountID(process.env.REACT_APP_IUGU_API_TOKEN)
  Iugu.setTestMode(process.env.NODE_ENV === 'development')

  Iugu.createPaymentToken(creditCard, function(response) {
    if (response.errors) {
      console.log(response.errors)
    } else {
      create({
        token: response.id,
      })
    }
  })
}
