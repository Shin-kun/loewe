import React, { useContext } from "react"
import styled from "styled-components/macro"

import NavContext from "src/hooks/nav/context"
import { NavContextProps } from "src/hooks/nav/context"
import A from "src/templates/Link"

function Navbar() {
  const { isNavButtonClicked } = useContext(NavContext) as NavContextProps

  return (
    <NavContainer isNavButtonClicked={isNavButtonClicked}>
      <Ul>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="#">Projects</Link>
        </Li>
        <Li>
          <Link to="#">Contact</Link>
        </Li>
      </Ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav<{ isNavButtonClicked: boolean }>`
  background-color: #1f2833;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${({ isNavButtonClicked }) => (isNavButtonClicked ? 1 : 0)};
  visibility: ${({ isNavButtonClicked }) =>
    isNavButtonClicked ? "visible" : "hidden"};
`

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 2.5rem;
  padding-right: 2.5rem;
`

const Li = styled.li``

const Link = styled(A)`
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    font-size: 6rem;
  }

  &:hover::after {
    width: 100%;
  }
`

export default Navbar
