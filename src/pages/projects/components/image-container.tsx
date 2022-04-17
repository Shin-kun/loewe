import React, { useEffect, useRef } from "react"
import styled from "styled-components/macro"

interface ImageContainerProps {
  className?: string
}

export const ImageContainer: React.FC<
  React.PropsWithChildren<ImageContainerProps>
> = ({ className, children }) => {
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
    <Container ref={ref} className={className}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  z-index: 9;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: fit-content;

  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1s, opacity 1s;

  &.show {
    opacity: 1;
    transform: translateX(0px);
  }
`
