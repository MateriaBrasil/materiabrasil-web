import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => ({ id }) => <Redirect to={`/forum/${id}`} />
