import createHumps from 'lodash-humps/lib/createHumps'
import { snakeCase as snake } from 'lodash'

const snakeCase = createHumps(snake)

export default snakeCase
