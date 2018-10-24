export default theme => ({
  grid: {
    [theme.breakpoints.down('md')]: {
      padding: '100px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 0',
    },
    position: 'relative',
    padding: '50px 0',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
  },
})
