export default update => params => {
  const { id, image_url, city, state, country, bio, company } = params
  const { website, workTitle } = params

  update({
    id,
    image_url,
    city,
    state,
    country,
    bio,
    company,
    workTitle,
    website,
  })
}
