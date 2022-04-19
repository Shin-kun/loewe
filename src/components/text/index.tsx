import React from "react"
import styled from "styled-components/macro"

import P from "src/styled-components/P"
import { device } from "src/theme"

interface TextProps {
  className?: string
}

const { useRef, useEffect, useState } = React

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  className,
  children,
}) => {
  let observer: IntersectionObserver | undefined = undefined
  const ref = useRef() as any

  function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }

  useEffect(() => {
    observer = new IntersectionObserver(intersectionObserverCallback, {
      threshold: 1,
    })
  }, [])

  useEffect(() => {
    if (observer) {
      observer.observe(ref.current!)
    }
  }, [ref])

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
