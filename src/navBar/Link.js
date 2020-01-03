import React from 'react';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import Colors from '../Colors';
import './Link.css';
import { useWindowSize } from '../helpers/hooks';

export default props => {
  const { to, text, isInstitutionalPage, targetBlank, transparent } = props;

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
      to={to}
      target={targetBlank ? '_blank' : undefined}
      style={{
        textDecoration: 'none',
        // color: isInstitutionalPage ? Colors.white : Colors.black,
        color:
          !transparent || windowSize.width < 768 ? Colors.black : Colors.white,
      }}
    >
      <Typography
        variant="subtitle1"
        color="inherit"
        style={{ display: 'inline-block', alignSelf: 'center' }}
      >
        {text}
      </Typography>
    </Link>
  );
};
