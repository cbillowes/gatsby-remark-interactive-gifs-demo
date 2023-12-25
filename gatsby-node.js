exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
      },
    },
  });
};