import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import { colors, device } from "src/theme"

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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const H1 = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  color: ${colors.hyperlink};
  font-size: 4rem;
  animation: ${fromLeft} 1.5s ease;

  @media ${device.laptop} {
    font-size: 7rem;
  }
`

const H5 = styled.h5`
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.text};
  line-height: 1.5;
  animation: ${fromLeft} 2.5s ease;
`
