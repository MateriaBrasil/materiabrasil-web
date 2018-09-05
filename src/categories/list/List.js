import renderCategory from 'categories/renderCategory'

export default props => props.list.map(renderCategory(props))
