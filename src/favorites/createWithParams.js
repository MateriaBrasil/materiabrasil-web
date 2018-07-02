export default (create, id) => () => {
  create({
    album_id: 0,
    favoritable_id: id,
    favoritable_type: 'Material',
  })
}
