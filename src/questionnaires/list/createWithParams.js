export default (create, aboutId, optionId, questionId) => () =>
  create({
    aboutId: parseInt(aboutId, 10),
    aboutType: 'Supplier',
    optionId,
    questionId,
  })
