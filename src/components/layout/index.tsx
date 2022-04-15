/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import styled from "styled-components/macro"

import Header from "../header"
import "./styles.css"

interface LayoutProps {
  className?: string
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  className,
  children,
}) => {
  return (
    <Container className={className}>
      <Header />
      <ContainerWithMargin
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Main>{children}</Main>
      </ContainerWithMargin>
    </Container>
  )
}

const Container = styled.div``

const Main = styled.main``

const ContainerWithMargin = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

export default Layout
