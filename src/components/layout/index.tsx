/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components/macro"

import Header from "../header"
import NavContext from "src/hooks/nav/context"
import useNav from "src/hooks/nav"
import Navbar from "src/components/navbar"
import Footer from "../footer"
import "./styles.css"
import { device } from "src/theme"

interface LayoutProps {
  className?: string
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  className,
  children,
}) => {
  const [isNavButtonClicked, onNavButtonClicked] = useNav()

  return (
    <Container className={className}>
      <NavContext.Provider value={{ isNavButtonClicked, onNavButtonClicked }}>
        <Header />
        <ContainerWithMargin>
          <Main>
            <Navbar />
            {children}
          </Main>
        </ContainerWithMargin>
        <Footer />
      </NavContext.Provider>
    </Container>
  )
}

const Empty = styled.div`
  width: 100%;
  padding: 2rem;
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const ContainerWithMargin = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex: 1;

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`

export default Layout

/* border-top-style: solid;
  border-top-color: ${colors.text};
  border-top-width: 1px; */
/* margin-top: 1.5rem; */
