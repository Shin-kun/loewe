import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import Layout from "src/components/layout"
import H1 from "src/templates/H1"
import A from "src/templates/Link"
import { colors } from "src/theme"

function Projects() {
  return (
    <Container>
      <MainSection>
        <Title>Projects</Title>
        <Ul>
          <Li>
            <Link to="/projects/cpha">CPHA Online Registration</Link>
            <Date>2018 - 2020</Date>
          </Li>
          <Li>
            <Link to="#">CSTC Branch</Link>
            <Date>Feb 2018 - Aug 2018</Date>
          </Li>
          <Li>
            <Link to="#">Kyocera Linux driver</Link>
            <Date>2019 - Now</Date>
          </Li>
          <Li>
            <Link to="#">Others</Link>
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
  font-size: 2.5rem;
  color: ${colors.buttons};
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    font-style: italic;
  }
`

const fromBottom = keyframes`
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
  transform-origin: 0% bottom;
  animation: ${fromBottom} 2s ease;
  overflow: auto;
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
`

export default Projects

