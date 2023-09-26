const { Survey } = require('../models');

const resolvers = {
  Query: {
    survey: async () => {
      return Survey.find({});
    }
  },
  Mutation: {
    createSurvey: async (parent, args) => {
      console.log(args)
      const survey = await Survey.create(args);
      return survey;
    }
  },
};

module.exports = resolvers;
