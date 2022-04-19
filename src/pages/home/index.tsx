import * as React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import { colors, device } from "src/theme"
import H1 from "src/styled-components/H1"
import H5 from "src/styled-components/H5"

export function Home() {
  return (
    <Section>
      <Heading>Hi, I'm Michael Loewe Alivio</Heading>
      <SubHeading>
        A Frontend Web & Mobile Developer from Cebu, Philippines
      </SubHeading>
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

const Heading = styled(H1)`
  font-weight: bold;
  color: ${colors.hyperlink};
  font-size: 4rem;
  animation: ${fromLeft} 1.5s ease;

  @media ${device.laptop} {
    font-size: 7rem;
  }
`

const SubHeading = styled(H5)`
  font-weight: normal;
  line-height: 1.5;
  animation: ${fromLeft} 2.5s ease;
`
