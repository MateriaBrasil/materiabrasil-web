import { createMuiTheme } from '@material-ui/core/styles';
import fill from 'lodash/fill';

import Colors from './Colors';
import './fonts.css';

const titleStyle = {
  fontFamily: 'Gotham Rounded',
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Open Sans',
    h1: titleStyle,
    h2: titleStyle,
    h3: titleStyle,
    h4: titleStyle,
  },
  palette: {
    background: {
      default: '#eee',
    },
    primary: {
      main: Colors.bondiBlue,
    },
    secondary: {
      main: Colors.seaBuckthorn,
    },
  },
  shadows: fill(Array(25), `0 0px 1px #999`),
  overrides: {
    MuiAppBar: {
      root: {
        padding: 10,
      },
    },
    MuiGridListTileBar: {
      rootSubtitle: {
        height: 96,
      },
      subtitle: {
        paddingTop: 12,
      },
    },
    MuiStepIcon: {
      completed: {
        color: 'black !important',
      },
      active: {
        color: 'black !important',
      },
    },
    MuiStepConnector: {
      vertical: {
        padding: 0,
      },
    },
  },
});
