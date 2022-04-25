import styled from "styled-components/macro"

import { colors, device } from "src/theme"
import Layout from "src/components/layout"

export const Overview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export const JobOverviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const JobOverviewSubSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const MainContainer = styled(Layout)`
  background-color: ${colors.secondary};
`

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
`
