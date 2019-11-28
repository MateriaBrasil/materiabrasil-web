export default (create, materialId, albumId) => () => {
  create({
    album_id: albumId,
    favoritable_id: materialId,
    favoritable_type: 'Material',
  });
};
