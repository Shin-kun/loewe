import React from "react"
import styled from "styled-components/macro"
import shortid from "shortid"
import { keyframes } from "styled-components"

import { colors } from "src/theme"

const { useState, useEffect } = React

interface PreloaderProps {
  path: string
}

function Preloader({ path }: PreloaderProps) {
  const [isRouteChanged, setIsRouteChanged] = useState(false)
  const [key, setKey] = useState("")

  useEffect(() => {
    setIsRouteChanged(!isRouteChanged)
    setKey(getId())
  }, [path])

  function getId() {
    const id = shortid.generate()
    return id
  }

  return <PreloaderContainer key={key} isRouteChanged={isRouteChanged} />
}

const slider = keyframes`
  from {
    visibility: visible;
    transform: scaleY(1);
  }

  to {
    visibility: visible;
    transform: scaleY(0);
  }
`

const PreloaderContainer = styled.div<{ isRouteChanged: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.hyperlink};
  position: absolute;
  z-index: 999;
  visibility: hidden;
  animation: ${slider} 1.2s cubic-bezier(0.48, 0, 0.12, 1);
  transform-origin: ${({ isRouteChanged }) =>
    isRouteChanged ? "0% top" : "0% bottom"};
`

export default Preloader
