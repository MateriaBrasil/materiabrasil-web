import pick from 'lodash/pick'

const whitelist = [
  'id',
  'name',
  'code',
  'averagePrice',
  'imageUrl',
  'coverImageUrl',
  'listImageUrl',
  'highlightImageUrl',
  'description',
  'properties',
  'usage',
  'technicalSpecificationUrl',
]

export default update => params => {
  const paramsToUpdate = pick(params, whitelist)
  update(paramsToUpdate)
}
