const { Survey } = require('../models');

const resolvers = {
  Query: {
    survey: async () => {
      return Survey.find({});
    },
    singleSurvey: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Survey.find(params);
    },
  },
  Mutation: {
    createSurvey: async (parent, args) => {
      console.log(args)
      const survey = await Survey.create(args);
      return survey;
    },
    updateVote: async (parent, { _id, choiceNum }) => {
      const vote = await Survey.findOneAndUpdate(
        { _id },
        { $inc: { [`choice${choiceNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
