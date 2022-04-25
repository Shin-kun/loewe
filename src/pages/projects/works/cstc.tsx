import React from "react"

import { Container } from "src/styled-components/projects/components/container"
import {
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "src/styled-components/projects/styled-components/container"
import Seo from "src/components/seo"
import { HeaderSection } from "src/styled-components/common/section"
import {
  Title,
  Heading,
  JobOverviewHeading,
} from "src/styled-components/projects/styled-components/heading"
import {
  Paragraph,
  JobOverviewSummary,
} from "src/styled-components/projects/styled-components/paragraph"

function Cstc() {
  return (
    <Container>
      <Seo title="CSTC" />
      <HeaderSection>
        <Title>CSTC</Title>
        <Heading>
          An inventory platform system that I helped build using AngularJS.
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
          CSTC Solutions is a web-mobile platform system that helps keep track
          records of shipment or goods in different branches from varoius
          warehouses that were owned by Choithram Sons Trading Corporation.
        </Paragraph>
        <Paragraph>
          For this particular project, I handled frontend web using the classic
          angularjs and jquery for user interactions.
        </Paragraph>
        <Paragraph>
          Unfortunately, I cannot display a sample of this project due to the
          server having been deployed in the CSTC office and not through cloud.
        </Paragraph>
      </Overview>
    </Container>
  )
}

export default Cstc
