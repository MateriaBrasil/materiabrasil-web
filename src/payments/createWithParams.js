/* globals Iugu */

export default (create, props) => (values, { setSubmitting }) => {
  const { name, number, expiry, cvc } = values
  const firstName =
    name.indexOf(' ') > -1 ? name.substr(0, name.indexOf(' ')) : name
  const lastName =
    name.indexOf(' ') > -1 ? name.substr(name.indexOf(' ') + 1) : ' '

  const creditCard = Iugu.CreditCard(
    number,
    expiry.split('/')[0],
    expiry.split('/')[1],
    firstName,
    lastName,
    cvc,
  )

  Iugu.setAccountID(process.env.REACT_APP_IUGU_API_TOKEN)
  Iugu.setTestMode(process.env.NODE_ENV === 'development')

  Iugu.createPaymentToken(creditCard, function(response) {
    if (response.errors) {
      setSubmitting(false)
      console.log(response.errors)
    } else {
      create({
        token: response.id,
      })
    }
  })
}
