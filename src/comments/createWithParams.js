import ReactGA from 'react-ga';

const types = {
  materials: 'Material',
  topics: 'Topic',
};

export default (create, { current, info, id, type }) => params => {
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

  ReactGA.event({
    category: 'Comentário',
    action: current.supplierName,
    label: current.name,
  });

  params.text = '';
};
