export default (create, id) => params =>
  create({
    supplierId: parseInt(id, 10),
    ...params,
  })
