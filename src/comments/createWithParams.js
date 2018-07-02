export default (create, id) => params =>
  create({
    commentable_id: id,
    commentable_type: 'Material',
    ...params,
  })
