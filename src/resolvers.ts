export default {
  Query: {
    test: () => "Project setup done 🌸",
  },
  Mutation: {
    signIn: async (_: never, { input }: any, { dataSources }: any) => {
      const { token, expiresIn } = await dataSources.tudokuAPI.signIn(input);
      return { token, expiresIn };
    },
    signUp: async (_: never, { input }: any, { dataSources }: any) => {
      const { token, expiresIn } = await dataSources.tudokuAPI.signUp(input);
      return { token, expiresIn };
    },
  },
};
