import React, { useRef, useEffect } from "react"
import styled from "styled-components/macro"

import { colors } from "src/theme"

interface TextProps {
  className?: string
}

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({ children }) => {
  const ref = useRef(null)

  const observer = new IntersectionObserver(intersectionObserverCallback, {
    root: ref.current,
    threshold: 1,
  })

  function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }

  useEffect(() => {
    observer.observe(ref.current!)
  })

  return <P ref={ref}>{children}</P>
}

const P = styled.p`
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 100;
  color: ${colors.text};
  line-height: 1.5;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1s, opacity 1s;

  &.show {
    opacity: 1;
    transform: translateX(0px);
  }
`

export default Text
