import React, { useEffect, useRef } from "react"
import { colors, device } from "src/theme"
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
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
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
