import pick from 'lodash/pick';

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
  'technicalSpecificationUrl',
  'availability',
  'unitOfSale',
  'minimumPurchaseQuantity',
  'maximumPurchaseQuantity',
  'ncmCode',
  'shCode',
  'certifications',
  'prizes',
  'density',
  'dimensions',
  // 'state',
];

export default update => params => {
  const paramsToUpdate = pick(params, whitelist);
  update(paramsToUpdate);
};
