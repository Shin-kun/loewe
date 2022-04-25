import styled from "styled-components/macro"

import { Link } from "gatsby"
import { colors } from "src/theme"

const A = styled(Link)`
  color: ${colors.buttons};
  font-family: "Montserrat";
  font-size: 4rem;
  font-weight: 500;
  position: relative;
  text-decoration: none;
`

export const InlineLink = styled(A)`
  width: fit-content;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.hyperlink};

  &:hover {
    cursor: pointer;
  }
`

export default A
