import AWS from 'aws-sdk'

import updateAWSConfig from '../updateAWSConfig'

jest.mock('aws-sdk', () => ({
  CognitoIdentityCredentials: jest.fn(),
  config: {
    update: jest.fn(),
  },
}))

it('calls function correctly', () => {
  updateAWSConfig()
  expect(AWS.config.update).toHaveBeenCalled()
})
