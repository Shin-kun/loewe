import React from "react"

import { MainContainer, MainSection } from "../styled-components/container"

interface ContainerProps {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return (
    <MainContainer>
      <MainSection>{children}</MainSection>
    </MainContainer>
  )
}
