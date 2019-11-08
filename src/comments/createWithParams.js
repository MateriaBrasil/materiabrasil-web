const types = {
  materials: 'Material',
  topics: 'Topic',
};

export default (create, { info, type }) => params => {
  const { id } = info;

  create({
    commentable_id: parseInt(id, 10),
    commentable_type: types[type],
    ...params,
  });

  params.text = '';
};
