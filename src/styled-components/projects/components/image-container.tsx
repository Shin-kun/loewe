import React from "react"
import { colors, device } from "src/theme"
import styled from "styled-components/macro"

interface ImageContainerProps {
  className?: string
}

const { useEffect, useRef, useState } = React

export const ImageContainer: React.FC<
  React.PropsWithChildren<ImageContainerProps>
> = ({ className, children }) => {
  let observer: IntersectionObserver | undefined = undefined
  const ref = useRef() as any

  function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
      if (entry.isIntersecting) {
        ;(observer as IntersectionObserver).unobserve(entry.target)
      }
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
    <Container ref={ref} className={className}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  z-index: 9;
  border-radius: 20px;
  background-color: white;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: fit-content;
  box-shadow: 0 20px 50px 0 ${colors.primary};
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
