import filter from 'lodash/filter'

export default function(categoryId) {
  return (event, expanded) => {
    const { expandedCategories } = this.state

    this.setState({
      expandedCategories: expanded
        ? [...expandedCategories, categoryId]
        : filter(expandedCategories, id => id !== categoryId),
    })
  }
}
