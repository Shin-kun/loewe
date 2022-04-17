const pages = [
  {
    path: "/projects/cpha",
    component: "./src/pages/projects/works/cpha.tsx",
    context: {},
  },
  {
    path: "/projects/cstc",
    component: "./src/pages/projects/works/cstc.tsx",
    context: {},
  },
  {
    path: "/projects/kyocera",
    component: "./src/pages/projects/works/kyocera.tsx",
    context: {},
  },
]

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  pages.forEach(page => {
    createPage({
      path: page.path,
      component: require.resolve(page.component),
      context: page.context,
    })
  })
}
