import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import { colors } from "src/theme"

function About() {
  return (
    <Container>
      <MainSection>
        <H1>About</H1>
        <H5>
          I'm Loewe, a Front-end web and hybrid-mobile developer based in Cebu,
          Philippines.
        </H5>
        <P>
          Ever since I took up my course in Computer Science in UP Cebu
          (University of the Philippines), I was able to at least equip myself
          on some fundamentals in both low and high level programming languages.
        </P>
        <P>
          Fast forward to 2022, I've since then focused my expertise on frontend
          web and mobile hybrid tech — React, React Native, HTML/CSS, Angular,
          etc.
        </P>
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
  height: 100vh;
  width: 100vw;
  transform-origin: 0% top;
  animation: ${fromTop} 0.75s ease;
  overflow: auto;
  overflow-x: hidden;
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: justify;
`

const H1 = styled.h1`
  font-family: "Montserrat";
  font-size: 7rem;
  font-weight: 900;
  color: ${colors.hyperlink};
  animation: ${fromLeft} 1.5s ease;
`

const H5 = styled.h5`
  font-family: "Montserrat";
  font-size: 2.25rem;
  font-weight: 700;
  color: ${colors.text};
  animation: ${fromLeft} 2s ease;
  line-height: 1.5;
  margin-bottom: 5rem;
`

const P = styled.p`
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 100;
  color: ${colors.text};
  animation: ${fromLeft} 2.5s ease;
  line-height: 1.5;
  margin-bottom: 3rem;
`

export default About
