import React from "react"

import { Container } from "../components/container"
import {
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "../templates/container"
import Seo from "src/components/seo"
import { HeaderSection } from "src/templates/section"
import { Title, Heading, JobOverviewHeading } from "../templates/heading"
import { Paragraph, JobOverviewSummary } from "../templates/paragraph"

function Cstc() {
  return (
    <Container>
      <Seo title="CSTC" />
      <HeaderSection>
        <Title>CSTC</Title>
        <Heading>
          An inventory platform system that I helped built using AngularJS.
        </Heading>
      </HeaderSection>
      <Overview>
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
          <JobOverviewSubSection>
            <JobOverviewHeading>Technologies</JobOverviewHeading>
            <JobOverviewSummary>
              Angular 6, HTML / CSS, Jasmine & Sinon, Jquery.
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

export default Cstc
