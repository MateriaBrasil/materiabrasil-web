export default update => params => {
  const { id, imageUrl, firstName, lastName, city, state, country } = params
  const { email, bio, company, website, workTitle } = params

  update({
    id,
    imageUrl,
    firstName,
    lastName,
    email,
    city,
    state,
    country,
    bio,
    company,
    workTitle,
    website,
  })
}
