export default (create, id) => params =>
  create({
    supplierId: id,
    ...params,
  });
