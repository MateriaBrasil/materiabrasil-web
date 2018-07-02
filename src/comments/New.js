import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'

export default props => <New name="comments" render={renderNew(props)} />
