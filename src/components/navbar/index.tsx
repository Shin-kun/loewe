import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components/macro"

import NavContext from "src/hooks/nav/context"
import { NavContextProps } from "src/hooks/nav/context"

function Navbar() {
  const { isNavButtonClicked } = useContext(NavContext) as NavContextProps

  return (
    <NavContainer isNavButtonClicked={isNavButtonClicked}>
      <Ul>
        <Li>
          <A to="#">About</A>
        </Li>
        <Li>
          <A to="#">Projects</A>
        </Li>
        <Li>
          <A to="#">Contact</A>
        </Li>
      </Ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav<{ isNavButtonClicked: boolean }>`
  background-color: #0b0c10;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.75s;
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

const A = styled(Link)`
  color: #66fcf1;
  font-family: "Montserrat";
  font-size: 4rem;
  font-weight: 500;
  position: relative;
  text-decoration: none;
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
