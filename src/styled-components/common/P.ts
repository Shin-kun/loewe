import styled from "styled-components/macro"

import { colors, animation } from "src/theme"

const P = styled.p`
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 100;
  color: ${colors.text};
  animation: ${animation.fade};
`

export default P
