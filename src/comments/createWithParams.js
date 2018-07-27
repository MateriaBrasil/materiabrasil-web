export default (create, id) => params =>
  create({
    commentable_id: parseInt(id, 10),
    commentable_type: 'Material',
    ...params,
  })
