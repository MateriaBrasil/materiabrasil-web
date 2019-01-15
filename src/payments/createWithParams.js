export default (create, props) => params => {
  const { name, number, expiry, cvc, value } = params

  //create token IUGU

  create({
    holderName: name,
    cardNumber: number,
    expirationMonth: expiry.split('/')[0],
    expirationYear: expiry.split('/')[1],
    securityCode: cvc,
    expiry,
  })
}
