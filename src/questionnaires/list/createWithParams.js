export default (create, aboutId, aboutType, optionId, questionId) => () =>
  create({
    aboutId: parseInt(aboutId, 10),
    aboutType,
    optionId,
    questionId,
  })
