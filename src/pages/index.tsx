import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "./home"
import useNav from "../hooks/nav"
import NavContext from "../hooks/nav/context"
import Navbar from "src/components/navbar"

const IndexPage = () => {
  const [isNavButtonClicked, onNavButtonClicked] = useNav()

  return (
    <NavContext.Provider value={{ isNavButtonClicked, onNavButtonClicked }}>
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </NavContext.Provider>
  )
}

export default IndexPage
