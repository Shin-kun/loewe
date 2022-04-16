import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import { colors } from "src/theme"

export function Home() {
  return (
    <Section>
      <H1>Hi, I'm Michael Loewe Alivio</H1>
      <H5>A Frontend Web & Mobile Developer from Cebu, Philippines</H5>
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
  animation: ${fromLeft} 2s ease;
`

const H1 = styled.h1`
  font-family: "Montserrat";
  font-size: 7rem;
  font-weight: bold;
  color: ${colors.hyperlink};
`

const H5 = styled.h5`
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.text};
  line-height: 1.5;
`
