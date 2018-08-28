import AWS from 'aws-sdk'

export default () => {
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: `${process.env.REACT_APP_AWS_REGION}:${
        process.env.REACT_APP_AWS_IDENTITY_POOL_ID
      }`,
    }),
  })
}
