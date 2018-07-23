import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
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
  overrides: {
    MuiAppBar: {
      root: {
        padding: 20,
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
