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

  Iugu.setAccountID('E03990E8194944CE85C60CD3424381E7')
  Iugu.setTestMode(true)

  Iugu.createPaymentToken(creditCard, function(response) {
    if (response.errors) {
      alert('Erro salvando cartão')
    } else {
      create({
        token: response.id,
      })
    }
  })
}
