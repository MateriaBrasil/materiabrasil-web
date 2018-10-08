export default (create, id) => ({ toType, text }) =>
  create({ toId: parseInt(id, 10), toType, text })
