export default (create, id) => ({ rating, text }) =>
  create({
    reviewable_id: parseInt(id, 10),
    reviewable_type: 'Material',
    rating: parseInt(rating, 10),
    text,
  })
