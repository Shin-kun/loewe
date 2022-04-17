import React from "react"
import styled from "styled-components/macro"
import { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import H1 from "src/templates/H1"
import Seo from "src/components/seo"
import H5 from "src/templates/H5"
import Text from "src/components/text"
import A from "src/templates/Link"
import { Container } from "../components/container"
import { colors } from "src/theme"
import { ImageContainer } from "../components/image-container"
import {
  TitleContainer,
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "../templates/container"

function Kyocera() {
  return (
    <Container>
      <Seo title="Kyocera" />
      <TitleContainer>
        <Title>Kyocera</Title>
      </TitleContainer>
      <Overview>
        <Heading>
          A Linux driver desktop app that communicates/sends user commands to a
          Kyocera printer — C++, QT Creator, etc.
        </Heading>
        <JobOverviewSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Role</JobOverviewHeading>
            <JobOverviewSummary>Driver Developer</JobOverviewSummary>
          </JobOverviewSubSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Responsibilities</JobOverviewHeading>
            <JobOverviewSummary>
              Code Reviewing, Maintenance, Bug fixing, Coding
            </JobOverviewSummary>
          </JobOverviewSubSection>
        </JobOverviewSection>
        <ImageContainer>
          <StaticImage
            src="../../../images/kyocera-linux-driver.jpg"
            width={550}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Kyocera Linux driver"
            style={{ zIndex: 10 }}
          />
        </ImageContainer>
        <Paragraph>
          Right after I graduated college, I decided to explore other desktop
          technologies especially C++ which I previously learned before tackling
          web programming. Kyocera gave me the opportunity to explore and
          maintain existing code base such as their Linux driver product.
        </Paragraph>
        <Paragraph>
          Over the past few years, I've been tasked in cleaning up some bugs and
          support new features that were in demand by the customers.
        </Paragraph>
        <CompanyLinkContainer>
          <Heading>Check the main page.</Heading>
          <Link to="https://www.kyoceradocumentsolutions.com/en/index.html">
            https://www.kyoceradocumentsolutions.com/
          </Link>
        </CompanyLinkContainer>
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

const Paragraph = styled(JobOverviewSummary)`
  text-align: justify;
`

const CompanyLinkContainer = styled(JobOverviewSubSection)`
  align-self: center;
  align-items: center;
`

const Link = styled(A)`
  width: fit-content;
  font-size: 1rem;
  color: ${colors.hyperlink};
  background-color: ${colors.primary};
  font-weight: bold;
  padding: 1.5rem;
  border-radius: 2rem;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

export default Kyocera
