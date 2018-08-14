export default ({ history, closeUrl, redirectUrl }) => () =>
  history.push(closeUrl || redirectUrl)
