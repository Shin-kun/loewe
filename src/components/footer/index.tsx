import React from "react"
import styled from "styled-components/macro"

import P from "src/styled-components/P"
import { device } from "src/theme"

function Footer() {
  const date = new Date().getFullYear()

  return (
    <Container>
      <Text>© 2022 All rights reserved</Text>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  padding: 3rem 1.0875rem 1.45rem;

  @media ${device.laptop} {
    padding: 3rem;
  }
`

const Text = styled(P)`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
`

export default Footer
