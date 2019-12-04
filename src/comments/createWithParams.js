const types = {
  materials: 'Material',
  topics: 'Topic',
};

export default (create, { info, id, type }) => params => {
  let nid;
  if (!info) {
    nid = id;
  } else {
    nid = info.id;
  }

  create({
    commentable_id: parseInt(nid, 10),
    commentable_type: types[type],
    ...params,
  });

  params.text = '';
};
