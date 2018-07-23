import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    background: {
      default: '#eee',
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
