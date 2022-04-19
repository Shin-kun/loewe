import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import { colors } from "src/theme"
import H1 from "src/styled-components/H1"
import H5 from "src/styled-components/H5"
import Text from "src/components/Text"
import Seo from "src/components/seo"
import { HeaderSection } from "src/styled-components/section"

function About() {
  return (
    <Container>
      <Seo title="About" />
      <MainSection>
        <HeaderSection>
          <Title>About</Title>
          <Heading>
            I'm Loewe, a Front-end web and hybrid-mobile developer based in
            Cebu, Philippines.
          </Heading>
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
    </Container>
  )
}

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

const fromTop = keyframes`
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
  transform-origin: 0% top;
  animation: ${fromTop} 2s ease;
  overflow: auto;
  overflow-x: hidden;
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: justify;
`

const Title = styled(H1)`
  animation: ${fromLeft} 1.5s ease;
`

const Heading = styled(H5)`
  animation: ${fromLeft} 2s ease;
  text-align: start;
  line-height: 1.5;
`

export default About
