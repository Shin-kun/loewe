import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import H1 from "src/styled-components/common/H1"
import P from "src/styled-components/common/P"
import { InlineLink } from "src/styled-components/common/Link"
import { device } from "src/theme"

function Contact() {
  return (
    <Layout>
      <MainSection>
        <Title>Contact</Title>
        <Paragraph>
          Contact me here.
          <br />
          <br />
          Email: <Link to="#">loewe.alivio@gmail.com</Link>
          <br />
          On the internet: <Link to="#">Github</Link>
        </Paragraph>
      </MainSection>
    </Layout>
  )
}

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

const Title = styled(H1)`
  animation: ${fromLeft} 1.5s ease;
`

const Paragraph = styled(P)`
  font-size: 1rem;
  margin: 0;
  animation: ${fromLeft} 2s ease;
`

const Link = styled(InlineLink)`
  font-size: 1rem;
  opacity: 1;
  transition: all 0.5s;

  &:hover {
    font-size: 1.5rem;
  }
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

export default Contact
