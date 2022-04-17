import React, { useRef, useEffect } from "react"
import styled from "styled-components/macro"

import P from "src/templates/P"

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
  font-family: "Montserrat";
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
