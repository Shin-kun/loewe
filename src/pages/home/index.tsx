import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import { colors } from "src/theme"

function Home() {
  return (
    <Section>
      <H1>Hi, I'm Michael Loewe Alivio</H1>
      <P>I'm a developer situated on Philippines — honing my coding skills.</P>
    </Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  animation: ${fromLeft} 2.5s ease;
`

const H1 = styled.h1`
  font-family: "Montserrat";
  font-size: 6rem;
  font-weight: 600;
  color: ${colors.hyperlink};
`

const P = styled.p`
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.text};
`

export default Home
