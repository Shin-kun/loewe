import * as React from "react"
import H1 from "src/styled-components/H1"
import P from "src/styled-components/P"
import { colors, device } from "src/theme"
import styled, { keyframes } from "styled-components"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const NotFoundPage = () => (
  <Container>
    <Seo title="404: Not found..." />
    <MainSection>
      <Title>404</Title>
      <Paragraph>You just hit a route that doesn't exist... 😞</Paragraph>
    </MainSection>
  </Container>
)

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
  transform-origin: 0% bottom;
  animation: ${fromTop} 2s ease;
  overflow: auto;
  overflow-x: hidden;
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

export default NotFoundPage
