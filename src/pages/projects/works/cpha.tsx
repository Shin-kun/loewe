import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "src/components/seo"
import { ImageContainer } from "src/components/projects/components/image-container"
import {
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "src/components/projects/styled-components/container"
import { Container } from "src/components/projects/components/container"
import { HeaderSection } from "src/styled-components/section"
import {
  Title,
  Heading,
  JobOverviewHeading,
} from "src/components/projects/styled-components/heading"
import {
  Paragraph,
  JobOverviewSummary,
} from "src/components/projects/styled-components/paragraph"

function Cpha() {
  return (
    <Container>
      <Seo title="CPHA" />
      <HeaderSection>
        <Title>CPHA</Title>
        <Heading>
          A registration web application system I helped built using Angular 6.
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
          The CPHA Online Registration system is a web application platform for
          tracking the records of the members of Cebu Pharmacists Association,
          Inc. It serves as a centralized platform in recording their members'
          registration information, events attended, etc.
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
          I took this job back when I was in my 3rd year of college to polish my
          skills in web programming. It was a challenge for me back then to
          tackle and learn the fundamentals in Javascript due to my prior
          knowledge and background in OOP in my first few years in Computer
          Science — moreso when I was cramming HTML/CSS.
        </Paragraph>
        <Paragraph>
          At the same time, this was also the job that helped me learn the most
          in the applications of web programming—REST, Reactive programming,
          Webflow, etc.
        </Paragraph>
      </Overview>
    </Container>
  )
}

export default Cpha
