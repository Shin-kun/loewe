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
    <Layout>
      <Seo title="Home" />
      <Section>
        <Heading>Hi, I'm Michael Loewe Alivio</Heading>
        <SubHeading>
          A Frontend Web & Mobile Developer from Cebu, Philippines
        </SubHeading>
      </Section>
    </Layout>
  )
}

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
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
  animation: ${fade} 1.5s ease;

  @media ${device.laptop} {
    font-size: 7rem;
  }
`

const SubHeading = styled(H5)`
  font-weight: normal;
  line-height: 1.5;
  animation: ${fade} 1.5s ease;
`

export default IndexPage
