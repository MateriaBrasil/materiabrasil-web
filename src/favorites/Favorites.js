import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'

export default ({ id }) => <New name="favorites" render={renderNew(id)} />
