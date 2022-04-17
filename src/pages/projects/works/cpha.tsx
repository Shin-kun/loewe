import React from "react"
import styled from "styled-components/macro"

import Layout from "src/components/Layout"
import { colors } from "src/theme"
import Seo from "src/components/seo"

function Cpha() {
  return (
    <Container>
      <Seo title="CPHA Online Registration" />
      <></>
    </Container>
  )
}

const Container = styled(Layout)`
  background-color: ${colors.secondary};
  overflow: auto;
`

export default Cpha
