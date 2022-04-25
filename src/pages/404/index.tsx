import * as React from "react"
import H1 from "src/styled-components/common/H1"
import P from "src/styled-components/common/P"
import styled from "styled-components/macro"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { device } from "src/theme"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found..." />
    <MainSection>
      <H1>404</H1>
      <Paragraph>You just hit a route that doesn't exist... 😞</Paragraph>
    </MainSection>
  </Layout>
)

const Paragraph = styled(P)`
  font-size: 1rem;
  margin: 0;
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 85vw;

  @media ${device.laptop} {
    width: 960px;
  }

  @media ${device.laptopL} {
    width: 1400px;
  }
`

export default NotFoundPage
