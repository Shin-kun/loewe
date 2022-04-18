import React, { useContext } from "react"
import styled from "styled-components/macro"

import Nav from "./components/nav"
import A from "src/templates/Link"
import NavContext, { NavContextProps } from "src/hooks/nav/context"

function Header() {
  const navContext = useContext(NavContext)
  const { isNavButtonClicked } = navContext as NavContextProps

  return (
    <Container>
      <HomeLink isNavButtonClicked={isNavButtonClicked} to="/">
        LW
      </HomeLink>
      <Nav />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  width: 100%;
  padding: 3rem;
  position: sticky;
  background-color: transparent;
  z-index: 21;
  flex-direction: row;
  justify-content: space-between;
`

const HomeLink = styled(A)<{ isNavButtonClicked: boolean }>`
  font-family: "Anton";
  font-size: 2rem;

  visibility: ${({ isNavButtonClicked }) =>
    isNavButtonClicked ? "hidden" : "visible"};

  &:hover {
    text-decoration: line-through;
    text-decoration-thickness: 3px;
  }
`

export default Header
