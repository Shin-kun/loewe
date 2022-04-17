exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects/cpha",
    component: require.resolve("./src/pages/projects/works/cpha.tsx"),
    context: {},
  })
}
