import React from 'react';

import { MaterialsList, MaterialSingle } from './styles';

export default function(props) {
  let border_string;
  const { materials } = props.current;
  return (
    <MaterialsList>
      {materials.map((item, index) => (
        <MaterialSingle
          item={item}
          to={{
            pathname: `/materials/${item.slug}`,
          }}
          key={String(index)}
        >
          <div className="content_img_borda">
            <div className="borda" bg-index={border_string} />
            <div
              className="img_loop"
              style={{
                backgroundImage: `url(${
                  item.highlighted ? item.highlightImageUrl : item.listImageUrl
                })`,
              }}
            />
          </div>
          <h2>{item.name}</h2>
        </MaterialSingle>
      ))}
    </MaterialsList>
  );
}
