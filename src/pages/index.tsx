import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import H1 from "src/styled-components/common/H1"
import H5 from "src/styled-components/common/H5"
import { colors, device } from "src/theme"

const IndexPage = () => {
  return (
    <Container>
      <Seo title="Home" />
      <Section>
        <Heading>Hi, I'm Michael Loewe Alivio</Heading>
        <SubHeading>
          A Frontend Web & Mobile Developer from Cebu, Philippines
        </SubHeading>
      </Section>
    </Container>
  )
}

const fromBottom = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    transform: scaleY(1);
  }
`

const Container = styled(Layout)`
  background-color: ${colors.primary};
  transform-origin: 0% bottom;
  animation: ${fromBottom} 2s ease;
  overflow: auto;
`

const fromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Heading = styled(H1)`
  font-weight: bold;
  color: ${colors.hyperlink};
  font-size: 4rem;
  animation: ${fromLeft} 1.5s ease;

  @media ${device.laptop} {
    font-size: 7rem;
  }
`

const SubHeading = styled(H5)`
  font-weight: normal;
  line-height: 1.5;
  animation: ${fromLeft} 2.5s ease;
`

export default IndexPage
