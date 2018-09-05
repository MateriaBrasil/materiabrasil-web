import React, { Component } from 'react'

export default class extends Component {
  // componentDidUpdate(prevProps) {
  //   const { location, listProps } = this.props
  //   const { location: prevLocation } = prevProps

  //   if (listProps && location.search !== prevLocation.search) {
  //     const { actions } = listProps
  //     actions.fetchList()
  //   }
  // }

  render() {
    const { list } = this.props
    console.log(list)
    return <div className={list} />
  }
}
