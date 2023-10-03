const { AuthenticationError } = require('apollo-server-express');
const { User, Survey } = require('../models');
const { signToken } = require('../utils/auth');
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
    
    deleteSurvey:async (parent, args) => {
      console.log(args)
      return Survey.findByIdAndDelete(args);

      // let ID = parseInt(id)
      // messages = messages.filter((message) => message.id !== ID);
      // return id;

      // const userThought = await User.findOneAndUpdate(
      //   { thoughts: req.params.thoughtId },
      //   { $pull: { thoughts: req.params.thoughtId } },
      //   { new: true }
      // );
    },

    updateVote: async (parent, { _id, choiceNum }) => {
      const vote = await Survey.findOneAndUpdate(
        { _id },
        { $inc: { [`choice${choiceNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }

  },
};

module.exports = resolvers;
