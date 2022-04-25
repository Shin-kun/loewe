import React from "react"
import styled from "styled-components/macro"

import Layout from "src/components/layout"
import H1 from "src/styled-components/common/H1"
import A from "src/styled-components/common/Link"
import { animation, colors, device } from "src/theme"
import Seo from "src/components/seo"
import P from "src/styled-components/common/P"

function Projects() {
  return (
    <Layout>
      <Seo title="Projects" />
      <MainSection>
        <H1>Projects</H1>
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
    </Layout>
  )
}

const Date = styled(P)`
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
  animation: ${animation.fade};
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
