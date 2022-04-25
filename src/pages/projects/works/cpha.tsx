import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "src/components/seo"
import { ImageContainer } from "src/styled-components/projects/components/image-container"
import {
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "src/styled-components/projects/styled-components/container"
import { Container } from "src/styled-components/projects/components/container"
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

function Cpha() {
  return (
    <Container>
      <Seo title="CPHA" />
      <HeaderSection>
        <Title>CPHA</Title>
        <Heading>
          A registration web application system I helped build using Angular 6.
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
              Code Reviewing, CSS, Unit testing, Webflow setup
            </JobOverviewSummary>
          </JobOverviewSubSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Technologies</JobOverviewHeading>
            <JobOverviewSummary>
              Angular 6, HTML / CSS, Jasmine & Sinon.
            </JobOverviewSummary>
          </JobOverviewSubSection>
        </JobOverviewSection>
        <Paragraph>
          The CPHA Online Registration system is a web application platform that
          tracks the records of the members of cebu Pharmacists Association,
          Inc. It serves as a centralized platform in recording their members'
          registration ifnromation, events attended, and other relevant
          information.
        </Paragraph>
        <ImageContainer>
          <StaticImage
            src="../../../images/cpha-home.jpeg"
            width={1500}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="CPHA Online Registration Home Page"
            style={{ zIndex: 10 }}
          />
        </ImageContainer>
        <Paragraph>
          I was in 3rd year college when I pursued this project with the goal to
          polish my skills in web programming. Back then, I figured it was
          challenging to tackle and learn the fundamentals in Javascript due to
          my prior knowledge and background in OOOP during my first few years in
          Computer Science — also especially when I was learning basic HTML/CSS.
        </Paragraph>
        <Paragraph>
          Despite that, this was the job that equipped me with valuable
          learnings on the applications of web programming — REST, Reactive
          programming, Webflow and among others.
        </Paragraph>
      </Overview>
    </Container>
  )
}

export default Cpha
