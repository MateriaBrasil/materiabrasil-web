export default ({ create, aboutId, aboutType, optionId, questionId }) => () =>
  create({
    aboutId: aboutId,
    aboutType,
    optionId,
    questionId,
  });
