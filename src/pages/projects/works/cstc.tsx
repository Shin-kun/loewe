import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import H1 from "src/templates/H1"
import { Container } from "../components/container"
import {
  TitleContainer,
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "../templates/container"
import Seo from "src/components/seo"
import H5 from "src/templates/H5"
import { colors } from "src/theme"
import Text from "src/components/text"

function Swooop() {
  return (
    <Container>
      <Seo title="CSTC" />
      <TitleContainer>
        <Title>CSTC</Title>
      </TitleContainer>
      <Overview>
        <Heading>
          An inventory platform system that I helped built using AngularJS,
          HTML/CSS, Jquery, etc.
        </Heading>
        <JobOverviewSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Role</JobOverviewHeading>
            <JobOverviewSummary>Frontend Web Developer</JobOverviewSummary>
          </JobOverviewSubSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Responsibilities</JobOverviewHeading>
            <JobOverviewSummary>
              Code Reviewing, CSS, Unit testing, Coding
            </JobOverviewSummary>
          </JobOverviewSubSection>
        </JobOverviewSection>
        <Paragraph>
          CSTC Solutions is a platform web-mobile system that helps keeping
          track records of shipment/goods to different branches from various
          warehouses that were owned by Choithram Sons Trading Corporation.
        </Paragraph>
        <Paragraph>
          For this particular project, I handled front-end web using the classic
          angularjs and jquery for user interactions. Unfortunately, I cannot
          display a sample of this project due to the server having been
          deployed in the CSTC office and not through cloud.
        </Paragraph>
      </Overview>
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

const Heading = styled(H5)`
  text-align: justify;
  margin-bottom: 2rem;
  color: ${colors.buttons};
  animation: ${fromLeft} 2s ease;
`

const JobOverviewHeading = styled(Text)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const JobOverviewSummary = styled(Text)`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`

const Paragraph = styled(JobOverviewSummary)``

export default Swooop
