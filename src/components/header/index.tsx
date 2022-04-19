import React, { useContext } from "react"
import styled from "styled-components/macro"

import Nav from "./components/nav"
import A from "src/styled-components/common/Link"
import NavContext from "src/hooks/nav/context"
import { NavContextProps } from "src/hooks/nav/context"
import { device } from "src/theme"

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
  position: sticky;
  background-color: transparent;
  z-index: 21;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 1.0875rem 1.45rem;

  @media ${device.laptop} {
    padding: 3rem;
  }
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
