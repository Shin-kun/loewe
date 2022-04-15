import * as React from "react"
import styled from "styled-components"

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
      <Seo title="Home" />
      <Container>
        <Navbar />
        <Home />
      </Container>
    </NavContext.Provider>
  )
}

const Container = styled(Layout)`
  background-color: #0b0c10;
  height: 100vh;
  width: 100vw;
`

export default IndexPage
