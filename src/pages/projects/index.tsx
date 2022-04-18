import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import H1 from "src/templates/H1"
import A from "src/templates/Link"
import { colors, device } from "src/theme"
import Seo from "src/components/seo"

function Projects() {
  return (
    <Container>
      <Seo title="Projects" />
      <MainSection>
        <Title>Projects</Title>
        <Ul>
          <Li>
            <Link to="/projects/cpha">CPHA</Link>
            <Date>2018 - 2020</Date>
          </Li>
          <Li>
            <Link to="/projects/cstc">CSTC</Link>
            <Date>Feb 2018 - Aug 2018</Date>
          </Li>
          <Li>
            <Link to="/projects/kyocera">Kyocera</Link>
            <Date>2019 - Now</Date>
          </Li>
        </Ul>
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

const Title = styled(H1)`
  animation: ${fromLeft} 1.5s ease;
`

const Date = styled.p`
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 100;
  color: ${colors.text};
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
`

const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Link = styled(A)`
  width: fit-content;
  font-size: 2.5rem;
  color: ${colors.buttons};
  transition: all 0.5s;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    font-size: 3rem;
  }

  @media ${device.mobileM} {
    &:hover {
      cursor: pointer;
      font-size: 4rem;
    }
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }
`

const fromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled(Layout)`
  background-color: ${colors.primary};
  transform-origin: 0% bottom;
  animation: ${fromBottom} 2s ease;
  overflow: auto;
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

export default Projects
