import styled from "styled-components/macro"
import { keyframes } from "styled-components"

import H1 from "src/styled-components/H1"
import H5 from "src/styled-components/H5"
import Text from "src/components/text"
import { colors } from "src/theme"

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

export const Title = styled(H1)`
  animation: ${fromLeft} 1.5s ease;
  font-style: italic;
  flex: 1;
`

export const Heading = styled(H5)`
  text-align: start;
  margin-bottom: 2rem;
  color: ${colors.buttons};
  animation: ${fromLeft} 2s ease;
  flex: 1;
`

export const JobOverviewHeading = styled(Text)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`
