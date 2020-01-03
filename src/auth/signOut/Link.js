import React from 'react';
import Typography from '@material-ui/core/Typography';

import onClick from '../../onClick';
import { useWindowSize } from '../../helpers/hooks';

export default props => {
  const { destroy, isInstitutionalPage, transparent } = props;

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return {
      width: width,
      height: height,
    };
  }

  let windowSize = ShowWindowDimensions(props);

  return (
    <a
      className="navbar-link"
      href="#destroy"
      onClick={onClick(destroy)}
      style={{
        marginLeft: 20,
        color: transparent && windowSize.width > 768 ? '#FFF' : '#000',
      }}
    >
      <Typography
        variant="subtitle1"
        color="inherit"
        style={{ display: 'inline-block', alignSelf: 'center' }}
      >
        Sair
      </Typography>
    </a>
  );
};
