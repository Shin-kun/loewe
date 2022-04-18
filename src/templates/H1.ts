import styled from "styled-components/macro"

import { colors, device } from "src/theme"

const H1 = styled.h1`
  font-family: "Montserrat";
  font-size: 4.5rem;
  font-weight: 900;
  color: ${colors.hyperlink};

  @media ${device.tablet} {
    font-size: 7rem;
  }
`

export default H1
