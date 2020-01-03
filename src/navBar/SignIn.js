import React from 'react';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import Colors from '../Colors';
import { useWindowSize } from '../helpers/hooks';

export default props => {
  const {
    location: { pathname },
    isInstitutionalPage,
    transparent,
  } = props;

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return {
      width: width,
      height: height,
    };
  }

  let windowSize = ShowWindowDimensions(props);

  return (
    <Link
      className="navbar-link"
      to={{
        pathname: '/auth/sign-in',
        state: { referrer: pathname },
      }}
      style={{
        textDecoration: 'none',
        color: transparent && windowSize.width > 768 ? '#FFF' : '#000',
      }}
    >
      <Typography
        variant="subtitle1"
        color="inherit"
        style={{ display: 'inline-block', alignSelf: 'center' }}
      >
        Entrar
      </Typography>
    </Link>
  );
};
