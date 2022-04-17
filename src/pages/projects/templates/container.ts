import styled from "styled-components/macro"

import { colors } from "src/theme"
import Layout from "src/components/layout"

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 15%;
  margin-bottom: 3rem;
`

export const Overview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export const JobOverviewSection = styled.section`
  display: flex;
  justify-content: space-evenly;
`

export const JobOverviewSubSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const MainContainer = styled(Layout)`
  background-color: ${colors.secondary};
  overflow: auto;
`

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
`
