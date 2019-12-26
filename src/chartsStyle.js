export default theme => ({
  radar: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    fontFamily: 'Gotham Rounded',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
  },
});
