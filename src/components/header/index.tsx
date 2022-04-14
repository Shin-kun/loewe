import React from "react"
import styled from "styled-components/macro"

import Nav from "./components/nav"

function Header() {
  return (
    <Container>
      <Nav />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  width: 100%;
  padding: 2rem;
  position: fixed;
  display: flex;
  justify-content: flex-end;
`

export default Header
