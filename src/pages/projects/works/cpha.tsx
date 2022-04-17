import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { colors } from "src/theme"
import Seo from "src/components/seo"
import H1 from "src/templates/H1"
import H5 from "src/templates/H5"
import Text from "src/components/text"
import { ImageContainer } from "../components/image-container"
import {
  TitleContainer,
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "../templates/container"
import { Container } from "../components/container"

function Cpha() {
  return (
    <Container>
      <Seo title="CPHA Online Registration" />
      <TitleContainer>
        <Title>CPHA Online Registration</Title>
      </TitleContainer>
      <Overview>
        <Heading>
          A registration web application system I helped built using Angular 6,
          HTML, CSS, etc.
        </Heading>
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
        </JobOverviewSection>
        <Paragraph>
          As the name suggests, the CPHA Online Registration system is a web
          application platform for tracking the records of the members of Cebu
          Pharmacists Association, Inc. It serves as a centralized platform in
          recording their members' registration information, events attended,
          etc.
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

export default Cpha
