import React from 'react'
import { New } from 'croods'

import render from './render'

export default props => <New name="comments" render={render(props)} />
