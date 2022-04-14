import React, { useContext } from "react"

import styled from "styled-components/macro"
import NavContext from "src/hooks/nav/context"
import { NavContextProps } from "src/hooks/nav/context"

const ShortHamburgerBar = styled.span`
  width: 40%;
  height: 3px;
  background-color: black;
  border-radius: 25px;
`

const LongHamburgerBar = styled(ShortHamburgerBar)`
  width: 100%;
`

const CloseBar = styled.i`
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  display: inline-block;
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 25px;
`

const CloseBarLeft = styled(CloseBar)`
  transform: rotate(-45deg);
`

const CloseBarRight = styled(CloseBar)`
  transform: rotate(45deg);
`

const NavButton = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
  border-color: transparent;
  border-style: solid;
`

const Hamburger = styled(NavButton)`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: space-between;
  height: 25px;
`

const Close = styled(NavButton)`
  position: relative;
`

function Nav() {
  const { isNavButtonClicked, onNavButtonClicked } = useContext(
    NavContext
  ) as NavContextProps

  return (
    <>
      {!isNavButtonClicked ? (
        <Hamburger onClick={onNavButtonClicked}>
          <ShortHamburgerBar />
          <LongHamburgerBar />
        </Hamburger>
      ) : (
        <Close onClick={onNavButtonClicked}>
          <CloseBarLeft />
          <CloseBarRight />
        </Close>
      )}
    </>
  )
}

export default Nav
