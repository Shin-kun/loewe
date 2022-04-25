import { css, keyframes } from "styled-components"

const fadeKeyframes = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`

const fade = css`
  ${fadeKeyframes} 2s ease;
`

const animation = {
  fade: fade,
}

export default animation
