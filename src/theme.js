import { createMuiTheme } from '@material-ui/core/styles'
import fill from 'lodash/fill'

import Colors from './Colors'

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Open Sans',
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
    MuiStepLabel: {
      root: {
        cursor: 'pointer !important',
      },
    },
    MuiStepConnector: {
      vertical: {
        padding: 0,
      },
    },
  },
})
