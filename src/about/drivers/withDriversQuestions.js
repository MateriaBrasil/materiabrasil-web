import React from 'react'
import find from 'lodash/find'
import { List } from 'croods'

export const findQuestionsByDriver = (drivers, driverName) =>
  find(drivers, driver => driver.driver === driverName).questions

const withDriversQuestions = Component => props => (
  <List
    disableCache
    name="questionnaires"
    path="/questionnaires"
    render={list => (
      <Component
        materialiteQuestions={findQuestionsByDriver(list, 'raw_material')}
        manufacturingQuestions={findQuestionsByDriver(list, 'process')}
        managementAndGovernanceQuestions={findQuestionsByDriver(
          list,
          'management_and_governance',
        )}
        socialHumanQuestions={findQuestionsByDriver(list, 'social_human')}
        {...props}
      />
    )}
  />
)

export default withDriversQuestions
