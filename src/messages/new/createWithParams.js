export default (create, id) => ({ text }) =>
  create({ toId: parseInt(id, 10), toType: 'Supplier', text })
