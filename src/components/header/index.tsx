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
  padding: 3rem;
  position: sticky;
  justify-content: flex-end;
  z-index: 3;
`

export default Header
