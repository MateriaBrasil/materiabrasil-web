export default (create, id) => ({ rating, text }) =>
  create({
    reviewable_id: id,
    reviewable_type: 'Material',
    rating: parseInt(rating, 10),
    text,
  });
