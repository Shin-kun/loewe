import React from "react"
import styled from "styled-components/macro"

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
            I'm Loewe, a frontend web and hybrid-mobile developer based in Cebu,
            Philippines.
          </SubHeading>
        </HeaderSection>
        <Text>
          I'm a Computer Science graduate from the University of the
          Philippines, Cebu. During my college years, I was able to take on a
          part-time job in developing web applications for small to medium
          enterprises which further strengthened my skills.
        </Text>
        <Text>
          Since then, I am passionate, keen to details, innovative, & dependable
          when given a task/project. Fast forward to 2022, I've focused my
          expertise on various web & mobile technologies — React, React Native,
          HTML/CSS etc.
        </Text>
        <Text>
          Apart from my current full-time job, I've also applied for another
          part-time job in helping establish a startup company. I have since
          been its tech lead in the web & mobile frontend development.
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
