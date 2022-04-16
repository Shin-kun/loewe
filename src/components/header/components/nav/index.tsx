import React, { useContext } from "react"
import { keyframes } from "styled-components"

import styled from "styled-components/macro"
import NavContext from "src/hooks/nav/context"
import { NavContextProps } from "src/hooks/nav/context"

function Nav() {
  const navContext = useContext(NavContext)
  const { isNavButtonClicked, onNavButtonClicked } =
    navContext as NavContextProps

  return (
    <NavButton
      className={isNavButtonClicked ? "open" : ""}
      onClick={onNavButtonClicked}
    >
      <FirstNavBarIcon />
      <SecondNavBarIcon />
    </NavButton>
  )
}

const FirstNavBarIcon = styled.span`
  width: 100%;
  border-radius: 25px;
  background-color: #45a29e;
  height: 3px;
  transition: 0.5s;
`

const SecondNavBarIcon = styled(FirstNavBarIcon)`
  width: 60%;
`

const fromRight = keyframes`
   from {
     opacity: 0;
     transform: translateX(100%);
   }
 
   to {
     opacity: 1;
     transform: translateX(0);
   }
 `

const NavButton = styled.button.attrs(props => ({
  className: props.className,
}))`
  animation: ${fromRight} 2.5s ease;
  height: 24px;
  width: 50px;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  outline: none;

  &.open {
    height: 50px;
  }

  &.open ${FirstNavBarIcon} {
    width: 100%;
    transform: rotate(-45deg);
    top: 10px;
    position: absolute;
  }

  &.open ${SecondNavBarIcon} {
    transform: rotate(45deg);
    top: 10px;
    position: absolute;
  }
`

export default Nav
