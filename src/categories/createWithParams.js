export default (create, { match, category }) => () =>
  create({
    materialId: parseInt(match.params.id, 10),
    categoryId: category.id,
  })
