import * as React from "react"
import styled from "styled-components/macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import H1 from "src/styled-components/common/H1"
import H5 from "src/styled-components/common/H5"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Section>
        <H1>Hi, I'm Michael Loewe Alivio</H1>
        <SubHeading>
          A Frontend Web & Mobile Developer from Cebu, Philippines
        </SubHeading>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const SubHeading = styled(H5)`
  font-weight: normal;
  line-height: 1.5;
`

export default IndexPage
