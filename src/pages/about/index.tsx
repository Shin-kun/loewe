import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import H1 from "src/styled-components/common/H1"
import H5 from "src/styled-components/common/H5"
import Text from "src/components/text"
import Seo from "src/components/seo"
import { HeaderSection } from "src/styled-components/common/section"

function About() {
  return (
    <Layout>
      <Seo title="About" />
      <MainSection>
        <HeaderSection>
          <H1>About</H1>
          <SubHeading>
            I'm Loewe, a Front-end web and hybrid-mobile developer based in
            Cebu, Philippines.
          </SubHeading>
        </HeaderSection>
        <Text>
          Ever since I took up my course in Computer Science in UP Cebu
          (University of the Philippines), I was able to at least equip myself
          on some fundamentals in both low and high level programming languages.
        </Text>
        <Text>
          During my college years, I took up a part-time job in developing web
          applications for small to medium enterprises.
        </Text>
        <Text>
          Fast forward to 2022, I've since then focused my expertise on frontend
          web and mobile hybrid tech — React, React Native, HTML/CSS etc.
        </Text>
      </MainSection>
    </Layout>
  )
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const SubHeading = styled(H5)`
  font-weight: normal;
  line-height: 1.5;
`

export default About
