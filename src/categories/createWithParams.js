export default (create, { match, category }) => () =>
  create({
    materialId: match.params.id,
    categoryId: category.id,
  });
