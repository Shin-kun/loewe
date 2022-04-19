import React, { useRef, useEffect } from "react"
import styled from "styled-components/macro"

import P from "src/styled-components/P"
import { device } from "src/theme"

interface TextProps {
  className?: string
}

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  className,
  children,
}) => {
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

  return (
    <Paragraph className={className} ref={ref}>
      {children}
    </Paragraph>
  )
}

const Paragraph = styled(P)`
  line-height: 1.5;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: transform 1s, opacity 1s;

  @media ${device.laptop} {
    transform: translateX(-50px);
  }

  &.show {
    opacity: 1;
    transform: translateX(0px);
  }
`

export default Text
