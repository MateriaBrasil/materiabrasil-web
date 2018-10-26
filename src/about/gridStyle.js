export default theme => ({
  grid: {
    position: 'relative',
    padding: '50px 0',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '1% 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '2% 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '5% 0',
    },
  },
})
