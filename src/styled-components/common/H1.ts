import styled from "styled-components/macro"

import { animation, colors, device } from "src/theme"

const H1 = styled.h1`
  font-family: "Lora";
  font-size: 4.5rem;
  font-weight: 700;
  color: ${colors.hyperlink};
  animation: ${animation.fade};

  @media ${device.tablet} {
    font-size: 7rem;
  }
`

export default H1
