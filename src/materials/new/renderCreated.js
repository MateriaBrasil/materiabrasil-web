import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => material => <Redirect to={`/${material.id}`} />
