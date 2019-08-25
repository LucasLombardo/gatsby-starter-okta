exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // avoid build time window errors from importing okta widget
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /okta-signin-widget/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
