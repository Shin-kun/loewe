import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Home } from "./home"
import { colors } from "src/theme"

const IndexPage = () => {
  return (
    <Container>
      <Seo title="Home" />
      <Home />
    </Container>
  )
}

const fromBottom = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    transform: scaleY(1);
  }
`

const Container = styled(Layout)`
  background-color: ${colors.primary};
  transform-origin: 0% bottom;
  animation: ${fromBottom} 2s ease;
  overflow: auto;
`

export default IndexPage
