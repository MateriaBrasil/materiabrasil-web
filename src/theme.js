import { createMuiTheme } from '@material-ui/core/styles'
import fill from 'lodash/fill'

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: '#eee',
    },
    primary: {
      main: '#239eb1',
    },
    secondary: {
      main: '#ea6740',
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
  },
})
